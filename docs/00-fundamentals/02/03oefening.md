# Oefening



## Opdracht 1: Maak een kloon van een repository 👈

* Ga op zoek naar de originele repository voor de Arduino IDE. Je vindt die op GitHub.
* Ga op zoek naar de url van de repository. Daarbij heb je keuze uit de git:// versie en de https:// versie. Afhankelijk van de tools waarmee je werkt (of je firewall settings) kan je de meest optimale versie kiezen. Bij gebruik in de terminal is de git:// een stuk optimaler, daarbij wordt een ssh tunnel opgezet.
Daarvoor worden de keys gebruikt die je eerder aanmaakte bij de installatie.
* Kloon de repository naar je computer.

```bash
git clone git://....
of 
git clone https://....
```



### Onderzoek de lokale kopie die je nu hebt.

* Wat is de bestandsgrootte van alle bestanden met uitzondering van de .git folder?

```
// antwoord
```

* Wat is de totale grootte van de .git folder?

```
// antwoord
```

* Hoe verklaar je dit?

```
// antwoord
```

:::tip 
Als je een repository wil klonen met een grote geschiedenis, maar die geschiedenis boeit je eigenlijk niet, dan kan je opteren voor een `shallow clone`. Je vindt online terug hoe je dat kan gebruiken..
:::

Analyseer de output van `git log`. 
```
// antwoord
``` 

## Opdracht 2: lokale repo koppelen aan een nieuwe remote 

:::warning

Deze werkwijze komt iets minder voor, en er zijn enkele mogelijke problemen die misschien wat overweldigend kunnen zijn. 
Zo moet de naam van je branch overeen komen met die op de remote, en dat is tegenwoordig soms lastig omdat de default wisselt tussen 'main' en 'default'.

Staat je branchnaam lokaal nog op (het verouderde) 'master' (controleer met `git config --list`), dan pas je dat beter aan met 

```
git config --global init.defaultBranch main
```

Ben je te laat om dat te detecteren, en noemt je branch reeds master, dan kan je hem hernoemen met

```
git branch -m main
```

:::

* Maak lokaal op je pc een map *lab-GIT* aan.
* Maak in die map een repository met `git init`
* Voeg een tekstbestand toe met de naam *index.html*
* Maak daarnaast een bestand aan met als naam *credentials.txt*
* Maak in Gitlab een repository aan met dezelfde naam als de map.
* Voeg een remote toe aan je lokale repository, noem deze *mijnremote*. Je zal daarvoor de git://-link nodig hebben die getoond wordt in de gitlab-interface. Je vindt daar overigens ook een voorbeeld-commando dat je nodig hebt om deze remote toe te voegen. 

:::tip 
Vaak wordt de naam 'origin' gebruikt om de remote aan te duiden. Dat is helemaal geen verplichting, en je kan eender welke naam gebruiken om je remote aan te duiden. Beter is zelfs misschien om aan te duiden welke remote het is. Als je ooit met meerdere remotes zal werken, dan zal dat veel duidelijker zijn dan het ongedefinieerde 'origin'.
:::

* Maak een *.gitignore* file aan om ervoor te zorgen dat het credentials.txt bestand niet per ongeluk in de repository terecht komt.
* Stage je wijzigingen, en ga na wat het effect is met `git status` en `git log`
* Commit de wijzigingen naar de repository, en ga na wat het effect is met `git status` en `git log`
* Push je wijzigingen naar de net toegevoegde remote.

Als dat gelukt is, zou je op Gitlab ook het index.html bestand moeten zien staan in je repository.

* Om het werken met remotes helemaal in de vingers te krijgen, maak je ook voor deze repository een nieuwe remote aan die wijst naar een nieuw aan te maken project op Gitlab (naam: "arduino_ide"). Push ook hier naar de nieuwe remote.
De werkwijze die je hierbij nodig hebt is grotendeels gelijk aan het begin van deze oefening.
Bekijk in detail wat het effect is van je acties. 
Bij deze oefening negeren we eigenlijk dat er meerdere branches gebruikt worden bij de ontwikkeling van een groot project zoals de Arduino IDE. Dat komt aan bod in een volgend hoofdstukje...
