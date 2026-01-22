# Reservation Bot

De Reservation Bot is een Mattermost plugin voor werkplekreservering. Medewerkers kunnen via een
chatbot bureaus en werkplekken reserveren en de beschikbaarheid bekijken.

## Hoe werkt het?

1. **Start een gesprek**: Stuur een bericht naar `@reservation-bot` in Mattermost
2. **Ontvang een link**: De bot stuurt een link terug die 1 uur geldig is
3. **Maak je reservering**: Via de link open je de reserveringspagina met plattegrond

## Features

- **Visuele plattegrond**: SVG-plattegrond met werkplekken die je kunt aanklikken
- **Multi-locatie ondersteuning**: Ondersteuning voor meerdere kantoorlocaties
- **iCal-export**: Reserveringen exporteren naar je agenda
- **Kiosk-modus**: Ondersteuning voor schermen in kantoren met automatische aanmelding
- **Kanaalrestrictie**: Toegang beperken tot leden van specifieke Mattermost-kanalen

## Admin configuratie

Beheerders kunnen het volgende instellen:

- Kantoorlocatie (voor iCal-export)
- Beheerdersrollen toekennen
- Plattegronden uploaden per locatie
- Toegangsrestricties configureren

## Technische details

De plattegrond is een SVG-bestand waarin werkplekken gedefinieerd worden met een specifiek
ID-formaat:

```xml
<rect id="room001" ... />
```

## Broncode

De broncode is beschikbaar op GitLab:
[gitlab.com/digilab.overheid.nl/ecosystem/mattermost-reservation](https://gitlab.com/digilab.overheid.nl/ecosystem/mattermost-reservation)
