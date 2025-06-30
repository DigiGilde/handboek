# Code reviews

Het doel van een code review is om de kwaliteit, leesbaarheid en naleving van alle requirements uit het ticket te
waarborgen voordat een wijziging wordt samengevoegd in de `main` branch. Daarnaast zijn code reviews een
communicatiemiddel, waardoor teamleden op de hoogte blijven van wijzigingen die worden gemaakt.

Code reviews houden in dat een teamlid de wijzigingen van een ander teamlid bekijkt en indien nodig feedback geeft of
vragen stelt.

## Een Pull Request aanmaken

We gebruiken GitHub pull requests (PR) voor code reviews. Je kunt alvast een draft PR maken als je werk nog in
uitvoering is. Wanneer je klaar bent, kun je de draft status weghealen. Een teamlid mag beginnen met reviewen wanneer
de PR geen draft status heeft.

Een PR heeft in de meeste gevallen 1 reviewer nodig om geaccepteerd te worden. Soms is het verstandig om meer reviews
te vragen, zodat er vanuit verschillende expertises naar een PR wordt gekeken.

## Review proces

Standaard wordt de codeowner, aangegeven in het CODEOWNER bestand, gevraagd om te reviewen. Als de PR-maker wil dat een
specifiek teamlid reviewt, moet de PR-maker het teamlid specifiek toevoegen in de reviewers sectie van de PR. Er wordt
een bericht geplaatst in Mattermost voor PR's. Laat even met een emoji weten als je de review oppakt.

Als de reviewer suggesties of opmerkingen heeft, kan de PR-maker deze oplossen of opmerkingen toevoegen aan de
suggesties. Wanneer de maker van de PR denkt klaar te zijn met de feedback, wordt er opnieuw een review aangevraagd van
de persoon die de review heeft gedaan. De reviewer moet dan naar de wijzigingen kijken en goedkeuren of meer opmerkingen
toevoegen. Dit proces gaat door totdat de reviewer ermee instemt dat alles correct is en de PR goedkeurt.

Zodra de review is goedgekeurd, controleert de PR-maker of de branch synchroon loopt met de hoofdbranch voordat deze
wordt gemerged. Zo niet, dan rebased de PR-maker de branch. Zodra de branch synchroon loopt met main mergt de
PR-maker de PR. Indien er sprake is van een deployment dan controleer je ook of de deployment succesvol is. Als de
deployment niet succesvol is, lost de PR-maker dit op. Als de PR meer dan één review nodig heeft, voegt de laatst
goedkeurende reviewer de PR samen.

In sommige gevallen is het handiger dat niet de PR-maker verantwoordelijk is voor het mergen van de PR, maar dat een
codeowner dit doet. In dit geval ligt de verantwoordelijkheid van het mergen en deployen bij de codeowner die de PR
afhandelt.
