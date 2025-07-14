# Accounts

## Mattermost chat

Zorg ervoor dat je [Mattermost](dev-machine.md#communicatie) hebt geïnstalleerd en volg dan de volgende stappen:

1. [Registreer](https://realisatieibds.pleio.nl/register) een nieuwe account op Pleio met je `@rijksoverheid.nl`
   e-mailadres.
2. [Login](https://digilab.overheid.nl/chat/login) -> Gitlab -> Pleio
    1. Of configureer de volgende server in Mattermost:

        ```url
        https://digilab.overheid.nl/chat
        ```

3. Vraag een collega om je toe te voegen aan het Digi Gilde en Rijks ICT Gilde team.
4. Vergeet niet om even je profiel in te stellen inclusief een herkenbare profiel afbeelding.

## Webex

Zorg ervoor dat je [Webex](dev-machine.md#communicatie) hebt geïnstalleerd en volg dan de volgende stappen:

- Maak op [https://rijksvideo.webex.com/](https://rijksvideo.webex.com/) een account aan met je `@rijksoverheid.nl`
  e-mailadres.

## Tuple

Zorg ervoor dat je [Tuple](dev-machine.md#communicatie) hebt geïnstalleerd en volg dan de volgende stappen:

- Maak op [https://tuple.app/](https://tuple.app/) een account aan met je `@rijksoverheid.nl` e-mailadres.
- Vraag een collega van het Digi Gilde om je toe te voegen.

## GitHub

Maak een nieuwe account aan op [GitHub](https://github.com/) of gebruik je bestaande account. Dat we open werken op
GitHub, betekent niet dat je een account hoeft te gebruiken die naar jou als privé persoon herleidbaar is. Het is geen
probleem om een anoniem account aan te maken. Als je een account hebt, volg daarna de volgende stappen:

- Voeg je `@rijksoverheid.nl` e-mailadres toe aan je account.
- Vraag een collega om je toe te voegen aan de GitHub organisatie [Digi Gilde](https://github.com/orgs/DigiGilde) en
  [Rijks ICT Gilde](https://github.com/orgs/RijksICTGilde).
- Vraag een collega om je toe te voegen aan de GitHub organisatie [MinBZK](https://github.com/orgs/MinBZK).

## Deel je Outlook agenda

- In Outlook: klik rechts op je agenda
- Selecteer eigenschappen
- Geef iedereen binnen de organisatie leesrechten

## Wachtwoorden

We maken gebruik van [HashiCorp Vault](https://vault.apps.digilab.network/) secrets manager voor het delen van team
gerelateerde secrets. Je kan inloggen met een [GitHub Personal access token](https://github.com/settings/tokens). De
token heeft de volgende rechten nodig:

- organization read permissions (`read:org`)

Ook moet je onderdeel zijn van ons GitHub team om toegang te krijgen tot deze vault.

## Self-service portaal
Op het [self-service portaal](https://topdesk-sscict.rijksweb.nl) kun je zelf zaken regelen, waarvoor je anders naar de SSC-ICT balie moet. Bijvoorbeeld het resetten van het blackberry wachtwoord.
