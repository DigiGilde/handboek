<!-- markdownlint-disable MD041 -->
[![Astro](https://img.shields.io/badge/Astro-brightgreen?logo=astro&logoColor=white)](https://astro.build/)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
<!-- markdownlint-enable MD041 -->

# Het Digi Handboek

Met het Digi Handboek maken we collega's graag wegwijs binnen het Digi Gilde (onderdeel van
[ODI](https://www.rijksorganisatieodi.nl/)). Op deze plek kun je onder andere tips en tricks vinden over het opzetten
van een digitale werkplek, hoe we werken en hoe we elkaar kunnen versterken.

In deze repository ontwikkelen wij het Digi Handboek. We werken dit met elkaar uit in verschillende Markdown bestanden
(een bestandsformaat voor platte tekstbestanden), welke je terug kan vinden in de map [docs](docs). Deze bestanden
worden inzichtelijk gemaakt met behulp van [Astro](https://astro.build/) en het
[NLDD Designsysteem](https://nederlandsedigitaledienst.github.io/design-system/).

Het Digi Handboek kun je bekijken op
[https://digihandboek.rijks.app/](https://digihandboek.rijks.app/).

## Hoe kun je bijdragen?

Dat kan op verschillende manieren. Zie onze
[Contributing Guidelines](CONTRIBUTING.md) voor meer uitleg over hoe je kan bijdragen aan het Digi Handboek.

### Lokaal ontwikkelen

Het Digi Handboek kan lokaal met behulp van [Node.js](https://nodejs.org/) worden bekeken.

#### Tool versies

Dit project gebruikt [asdf](https://asdf-vm.com/) voor tool versie management. De juiste versie van Node.js staat
gedefinieerd in het `.tool-versions` bestand. Als je asdf hebt geïnstalleerd, installeer dan de juiste versie met:

```bash
asdf install
```

Zonder asdf: zorg ervoor dat je Node.js 22.12+ hebt geïnstalleerd.

#### Dependencies installeren

Installeer de benodigde packages met:

```bash
npm install
```

#### Lokale preview

Je kan een preview van het Digi Handboek lokaal bekijken met:

```bash
npm run dev
```

Zoeken werkt alleen op de gebouwde site. Bekijk die met:

```bash
npm run build
npm run preview
```

`npm run build` controleert daarna de gebouwde site tegen het NLDD Designsysteem: elk `nldd-*` element, attribuut, icoon
en elke CSS-variabele moet in het pakket bestaan, en elk gebruikt element moet geregistreerd zijn in
[src/scripts/nldd.ts](src/scripts/nldd.ts). Een verkeerde naam rendert bij dit systeem niets en geeft geen foutmelding.

#### Toegankelijkheid toetsen

```bash
npm run a11y
```

Dit bouwt de site, controleert de koppenstructuur en de interne links, en toetst daarna elke pagina met
[pa11y-ci](https://github.com/pa11y/pa11y-ci) op WCAG 2.1 AA, met HTML_CodeSniffer en axe-core. Dezelfde toets draait bij
elke pull request. Is poort 4173 bezet, kies dan een andere met `A11Y_PORT=4180 npm run a11y`.

#### Externe links controleren

```bash
npm run links:extern
```

Dit haalt elke externe link op en faalt op een pagina die weg is (404 of 410) of een adres dat niet bestaat. Links naar
het intranet van de Rijksoverheid zijn buiten het Rijksnetwerk niet te controleren en worden alleen gemeld. Dezelfde
controle draait elke maandag op GitHub.

#### De container testen

Productie draait als nginx-container op ZAD, op [https://digihandboek.rijks.app/](https://digihandboek.rijks.app/).
GitHub Pages verwijst door naar dat adres. Bouw en start de container lokaal met Podman (of Docker):

```bash
npm run build
podman build --platform linux/amd64 -f container/Containerfile -t digi-handboek .
podman run --rm --read-only -p 8080:8080 digi-handboek
```

De site staat dan op [http://localhost:8080/](http://localhost:8080/), met dezelfde headers en Content-Security-Policy
als in productie.

#### Pagina's toevoegen

De pagina's staan als Markdown in de map [docs](docs). Het menu staat in [src/navigation.ts](src/navigation.ts): voeg
een nieuwe pagina daar toe om hem in het menu te laten verschijnen. De eerste kop (`#`) van een pagina is de titel.

## Licentie

De teksten van het Digi Handboek, de Markdown-bestanden in de map [docs](docs), vallen onder
[Creative Commons Zero (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/deed.nl). Je mag ze hergebruiken,
ook voor commerciële doeleinden, zonder toestemming en zonder bronvermelding. Bronvermelding stellen we wel op prijs. De
volledige tekst, in de officiële Nederlandse vertaling van Creative Commons, staat in
[LICENSE-CC0-1.0.txt](LICENSE-CC0-1.0.txt).

De code van de website valt onder de [Openbare Licentie van de Europese Unie 1.2 (EUPL-1.2)](LICENSE), in de
officiële Nederlandse versie van de Europese Commissie.

Het logo en de huisstijl van de Rijksoverheid en de lettertypen RijksSans en JetBrains Mono vallen onder geen
van beide licenties. Ze komen mee met het [NLDD Designsysteem](https://github.com/NederlandseDigitaleDienst/design-system)
en daarvoor gelden de voorwaarden in
[NOTICES.md](https://github.com/NederlandseDigitaleDienst/design-system/blob/main/NOTICES.md) van het designsysteem.

## Vragen?

Maak een [issue](https://github.com/DigiGilde/handboek/issues/new/choose) aan op GitHub. Of stuur een e-mail naar
[digigilde@rijksoverheid.nl](mailto:digigilde@rijksoverheid.nl).
