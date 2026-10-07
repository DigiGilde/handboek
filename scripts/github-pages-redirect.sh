#!/bin/sh
# Writes a redirect page for every page of a built site, so old GitHub Pages
# links land on the same page at the new location.
#
# Usage: scripts/github-pages-redirect.sh <site-dir> <out-dir> <target-url>
set -eu

site=$1
out=$2
target=${3%/}

page() {
  url=$1
  cat <<EOF
<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>Het Digi Handboek is verhuisd</title>
<link rel="canonical" href="$url">
<meta http-equiv="refresh" content="0; url=$url">
<script>location.replace("$url" + location.search + location.hash)</script>
</head>
<body>
<p>Het Digi Handboek is verhuisd naar <a href="$url">$url</a>.</p>
</body>
</html>
EOF
}

mkdir -p "$out"
(cd "$site" && find . -name index.html) | while read -r file; do
  path=${file#./}
  path=${path%index.html}
  mkdir -p "$out/$path"
  page "$target/$path" > "$out/${path}index.html"
done

# GitHub Pages serves 404.html for every unknown path: map it onto the new
# location instead of dropping the path. The site lives under /handboek/.
cat > "$out/404.html" <<EOF
<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>Het Digi Handboek is verhuisd</title>
<script>location.replace("$target/" + location.pathname.replace(/^\/handboek\/?/, "") + location.search + location.hash)</script>
</head>
<body>
<p>Het Digi Handboek is verhuisd naar <a href="$target/">$target/</a>.</p>
</body>
</html>
EOF
