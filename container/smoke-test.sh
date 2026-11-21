#!/usr/bin/env bash
# Start the built image the way ZAD runs it (arbitrary UID, group 0) and check
# that nginx serves pages. `apk upgrade` in the Containerfile pulls the newest
# Alpine packages on every build, next to a pinned nginx, so a library update
# could break nginx without the build failing.
#
# Usage: container/smoke-test.sh <image>   (CONTAINER_ENGINE=podman locally)
set -euo pipefail

image="${1:?usage: $0 <image>}"
engine="${CONTAINER_ENGINE:-docker}"
name="smoke-test-$$"
port="${SMOKE_PORT:-18080}"

trap '"$engine" rm -f "$name" >/dev/null 2>&1 || true' EXIT

"$engine" run -d --name "$name" --user 54321:0 -p "127.0.0.1:${port}:8080" "$image" >/dev/null

status() { curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${port}$1" || true; }

for _ in $(seq 1 30); do
  [ "$(status /)" = 200 ] && break
  sleep 1
done

fail=0
check() {
  local path="$1" want="$2" got
  got="$(status "$path")"
  if [ "$got" = "$want" ]; then
    echo "ok   $path -> $got"
  else
    echo "FAIL $path -> $got, expected $want"
    fail=1
  fi
}

check / 200
check /bijdragen-aan-handboek/ 200
check /bestaat-niet/ 404

if ! curl -s -H 'Accept-Encoding: gzip' -o /dev/null -D - "http://127.0.0.1:${port}/" | grep -qi '^content-encoding: gzip'; then
  echo "FAIL / is not served gzipped"
  fail=1
fi

"$engine" exec "$name" nginx -t || fail=1

# io_setup fails under emulation (no native AIO); that is not an nginx fault.
if "$engine" logs "$name" 2>&1 | grep -E '\[(emerg|alert|crit)\]' | grep -v 'io_setup()'; then
  echo "FAIL nginx logged errors"
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo "--- container log ---"
  "$engine" logs "$name" 2>&1 | tail -20
fi

exit "$fail"
