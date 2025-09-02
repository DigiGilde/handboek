# SSO-Rijk

SSO-Rijk kan gebruikt worden voor authenticatie van rijksmedewerkers. Binnen het RIG zijn er momenteel tenminste
twee projecten die hier gebruik van maken.

We zijn bezig een centrale RIG Keycloak op te zetten die gekoppeld is met SSO-Rijk waar op aanvraag gebruik
gemaakt van kan worden.

## Aangeleverde attributen

De volgende attributen worden aangeleverd. Afhankelijk van de koppelmethode, SAML of OIDC kunnen de attribuut-namen verschillen.

* urn:rijksoverheid:federation:displayName
* urn:rijksoverheid:federation:emailAddress
* urn:rijksoverheid:federation:givenName
* urn:rijksoverheid:federation:organizationDisplayName
* urn:rijksoverheid:federation:organizationNumber
* urn:rijksoverheid:federation:surName

organizationDisplayName lijkt zich te beperken tot de hoofdorganisatie, zoals de naam van het ministerie.

organizationNumber is het openbare [Organisatie Identificatienummers (OIN)](https://oinregister.logius.nl/oin-register)
