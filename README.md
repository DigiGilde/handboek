<!-- markdownlint-disable MD041 -->
[![Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-brightgreen?logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
<!-- markdownlint-enable MD041 -->

# Het Digi Handboek

Met het Digi Handboek maken we collega's graag wegwijs binnen het Digi Gilde (onderdeel van het
[Rijks ICT Gilde](https://rijksictgilde.nl/)). Op deze plek kun je onder andere tips en tricks vinden over het opzetten
van een digitale werkplek, hoe we werken en hoe we elkaar kunnen versterken.

In deze repository ontwikkelen wij het Digi Handboek. We werken dit met elkaar uit in verschillende Markdown bestanden
(een bestandsformaat voor platte tekstbestanden), welke je terug kan vinden in de map [docs](docs). Deze bestanden
worden inzichtelijk gemaakt met behulp van [MkDocs](https://www.mkdocs.org/) en
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

Het Digi Handboek kun je bekijken op
[https://digigilde.github.io/handboek/](https://digigilde.github.io/handboek/).

## Hoe kun je bijdragen?

Dat kan op verschillende manieren. Zie onze
[Contributing Guidelines](CONTRIBUTING.md) voor meer uitleg over hoe je kan bijdragen aan het Digi Handboek.

### Lokaal ontwikkelen

Het Digi Handboek kan lokaal met behulp van [Python](https://www.python.org/) worden bekeken.

#### Tool versies

Dit project gebruikt [asdf](https://asdf-vm.com/) voor tool versie management. De juiste versies van Python en uv staan
gedefinieerd in het `.tool-versions` bestand. Als je asdf hebt geïnstalleerd, installeer dan de juiste versies met:

```bash
asdf install
```

Zonder asdf: zorg ervoor dat je Python 3.13.3+ en uv 0.7.20+ hebt geïnstalleerd.

#### Dependencies installeren

Installeer de benodigde packages met [uv](https://github.com/astral-sh/uv):

```bash
uv sync
```

#### Lokale preview

Je kan een preview van het Digi Handboek lokaal bekijken met:

```bash
uv run mkdocs serve
```

## Vragen?

Maak een [issue](https://github.com/DigiGilde/handboek/issues/new/choose) aan op GitHub. Of stuur een e-mail naar
[RIG@rijksoverheid.nl](mailto:RIG@rijksoverheid.nl).
