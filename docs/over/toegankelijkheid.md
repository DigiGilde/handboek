---
description: "In hoeverre het Digi Handboek voldoet aan de toegankelijkheidseisen voor overheidswebsites (concept)."
---

# Toegankelijkheid

Deze verklaring beschrijft in hoeverre het Digi Handboek voldoet aan de toegankelijkheidseisen voor overheidswebsites.
De wettelijke norm is WCAG 2.1 niveau AA, via EN 301 549 en verplicht onder het Besluit digitale toegankelijkheid
overheid.

**Dit is een concept.** De status hieronder berust op eigen toetsen van het team. Een onderzoek door een onafhankelijke
partij heeft niet plaatsgevonden. De definitieve verklaring moet nog worden opgesteld met de invulassistent op
[toegankelijkheidsverklaring.nl](https://www.toegankelijkheidsverklaring.nl) en worden gepubliceerd in het register van
[DigiToegankelijk](https://www.digitoegankelijk.nl). Tot dat rond is, is dit geen rechtsgeldige verklaring en draagt de
site geen toegankelijkheidslabel.

## Nalevingsstatus

Status C in het model van DigiToegankelijk: de toegankelijkheid van deze website is nog niet volledig onderzocht. Er is
wel getoetst (zie hieronder), maar er ligt nog geen volledig, gedocumenteerd onderzoek tegen alle succescriteria van
WCAG 2.1 AA.

## Hoe dit getoetst is

De website is opgebouwd uit de componenten van het
[NLDD Designsysteem](https://nederlandsedigitaledienst.github.io/design-system/). Die leveren het toetsenbordgedrag, de
focusindicatie, de kleurcontrasten en de ARIA-kenmerken zelf mee.

**Geautomatiseerd, bij elke wijziging.** Bij elke wijziging aan de site bouwt een toets de site en controleert elke
pagina met [pa11y-ci](https://github.com/pa11y/pa11y-ci) op WCAG 2.1 AA, met twee engines:
[HTML_CodeSniffer](https://github.com/squizlabs/HTML_CodeSniffer) en
[axe-core](https://github.com/dequelabs/axe-core). De lijst met pagina's komt uit de build, zodat een nieuwe pagina
vanzelf meegetoetst wordt. Daarnaast controleert de toets de koppenstructuur op overgeslagen niveaus en elke interne
link. Bij een fout faalt de toets.

**Met een aangestuurde browser.** Bij het bouwen van deze versie is met een automatisch aangestuurde browser
nagelopen:

- de bediening met alleen een toetsenbord, inclusief de link "Direct naar de inhoud", het zoeken en de inhoudsopgave;
- de weergave op schermbreedtes van 320 tot 1280 pixels, zonder horizontale scroll.

**Met de hand.** Het team heeft de site daarnaast met de hand doorlopen, met het toetsenbord en op verschillende
schermbreedtes.

## Bekende beperkingen

Geen van deze punten is een afwijking van WCAG 2.1 AA. Ze komen uit de componenten van het designsysteem; de footer en
de codevoorbeelden meldt axe-core als "best practice".

- **Landmarks in de schaduw-DOM.** De componenten tekenen onder meer de hoofdinhoud, de kopregel en de footer in hun
  schaduw-DOM. De ondersteuning daarvoor verschilt per schermlezer en is niet apart per schermlezer geverifieerd.
- **De footer als landmark.** De footer is twee keer als landmark aanwezig, en een van de twee ligt binnen een andere
  landmark. Een schermlezer kan de footer daardoor dubbel aankondigen.
- **Lijsten bedien je met de pijltjestoetsen.** De inhoudsopgave en "Lees ook" zijn elk één tabstop; binnen de lijst
  ga je met de pijltjes naar de volgende link. Zo werkt elke lijst in het designsysteem, maar wie per link Tab verwacht,
  kan dat onverwacht vinden.
- **Codevoorbeelden.** Elk codevoorbeeld is een eigen regio met de naam "Code". Staan er meerdere op een pagina, dan
  zijn die regio's voor een schermlezer niet van elkaar te onderscheiden.

## Een toegankelijkheidsprobleem melden

Loop je op deze website tegen een toegankelijkheidsprobleem aan, of heb je een vraag over de toegankelijkheid? Laat het
ons weten via [digigilde@rijksoverheid.nl](mailto:digigilde@rijksoverheid.nl), dan pakken we het op.

## Handhaving

Ben je niet tevreden met hoe we je melding afhandelen, of krijg je geen reactie? Dan kun je een klacht indienen bij het
[College voor de Rechten van de Mens](https://www.mensenrechten.nl).
