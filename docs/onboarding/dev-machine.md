# Configureren van jouw Dev Machine

Wij gaan ervan uit dat jouw Dev Machine een Macbook is. Deze handleiding is behoorlijk eigenzinnig, maar geeft aan welke
tools een aantal van jouw collega's in de praktijk gebruiken. Voel je vrij om af te wijken, en als je denkt dat we iets
moeten aanpassen in onderstaande lijst voel je vrij om hiervoor een pull request te maken.

## Zaken die standaard op je Macbook zouden moeten zitten

- [Homebrew as the missing Package Manager](https://brew.sh/)
    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
- [Keep awake met Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704)

- [Office DisplayLink software](https://www.synaptics.com/products/displaylink-graphics/downloads/macos) (verbinden externe schermen)
    ```shell
    brew install --cask displaylink
    ```
- [Rectangle](https://rectangleapp.com/)

    ```shell
    brew install --cask rectangle
    ```

## Citrix workspace

Via Citrix krijg je toegang tot jouw digitale Rijkswerkplek.

- [Citrix workspace](https://www.citrix.com/downloads/workspace-app/)
- [Flex2Rijk](https://www.flex2rijk.nl/) om in te loggen en Citrix te configureren

## Communicatie

- [Mattermost](https://mattermost.com/) voor dagelijkse communicatie met je collega's

    ```shell
    brew install --cask mattermost
    ```

- [WebEx](https://www.webex.com/) voor video calls

    ```shell
    brew install --cask webex
    ```

- [Tuple](https://tuple.app/download) om met elkaar vanaf afstand samen te werken

## Terminal en shell

- [Iterm2](https://iterm2.com/)

    ```shell
    brew install --cask iterm2
    ```

- [Oh My Zsh](https://ohmyz.sh/)

    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

- [Autosuggestions for zsh](https://github.com/zsh-users/zsh-autosuggestions)

    ```shell
    git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
    ```

- [Fish shell like syntax highlighting for Zsh](https://github.com/zsh-users/zsh-syntax-highlighting)

    ```shell
    brew install zsh-syntax-highlighting
    ```

- Voeg [plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) voor Oh My ZSH toe in `~/.zshrc`. Een suggestie om mee
  te starten:

    ```ini
    plugins=(docker docker-compose git kubectl uv)
    ```

- [Touch ID in Terminal](https://apple.stackexchange.com/questions/259093/can-touch-id-on-mac-authenticate-sudo-in-terminal)

## IDE & Coding

We willen graag dat jij je werk goed uit kan voeren. Qua IDE maken collega's bijvoorbeeld gebruik van
[VSCode](https://code.visualstudio.com/) of [JetBrains](https://www.jetbrains.com/). Maar heb jij een andere voorkeur,
dan kan dat waarschijnlijk ook. Mocht er een licentie nodig zijn, dan kun je dit bij jouw manager aanvragen. Voor in
ieder geval JetBrains zijn er eerder licenties aangeschaft.

Verder staan hieronder andere tools die door ons vaker worden gebruikt:

- [Sourcetree](https://www.sourcetreeapp.com/)

    ```shell
    brew install --cask sourcetree
    ```

- [uv](https://docs.astral.sh/uv/)

    ```shell
    brew install uv
    ```

- [pre-commit](https://pre-commit.com/)

    ```shell
    brew install pre-commit
    ```

- [Xcode Command Line Tools](https://developer.apple.com/xcode/resources/)

    ```shell
    xcode-select --install
    ```

- [Sign commits with SSH](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-ssh-key)
