# Staging area & commits

## Staging

Git is een gedistribueerd systeem. Dat betekent dat je ook volledig offline kan ontwikkelen, om dan op een later moment je code te gaan synchroniseren.

Daarbij moeten wel een aantal stappen doorlopen worden.

Eerst moet duidelijk gemaakt worden aan GIT dat een bestand moet onder versiecontrole geplaatst worden. Dit doe je met het `git add` commando. 

Daarmee plaats je bestanden in de *staging area*. Bestanden die nog niet in de staging area geplaatst zijn, zitten in de *working tree*, ook wel *working directory* genoemd.

```bash
git add myfile.c <1>
git add . <2>
```

<1> Voegt een specifiek bestand toe aan de staging area. Hiermee kan je meer granulair kiezen welke bestanden in GIT mogen worden beheerd.

<2> Door in plaats van specifieke bestanden een `'.'`te gebruiken, voeg je alle bestanden toe aan de staging area. Hoewel dat makkelijk werkt, houdt het ook een aantal risico's in: de kans is zo veel groter dat je bestanden gaat toevoegen die je eigenlijk liever niet toevoegt.

## Committing

Door bestanden op te nemen met  `git add` voeg je ze toe aan de staging area. Op dat moment zijn deze bestanden nog geen deel van je repository.

Toevoegen aan een repository doen we met een 'commit'. Daarmee worden bestanden écht toegevoegd aan je (lokale) repository.

```bash
git commit -m "commit message"
```

Nadat dit commando uitgevoerd wordt, zitten alle bestanden die voorheen in de staging area zaten nu effectief in de repository. Ze zijn dus veilig aan een versie gekoppeld, de versie waar de 'HEAD' naar wijst.

de HEAD kan je zien als een pointer naar de huidige branch, wat op zich een pointer is naar de laatste commit.

Het bericht dat je meegeeft is erg belangrijk: dit is wat andere gebruikers ook zullen zien als ze door de geschiedenis van een project gaan.

Afspraken bij het maken van een bericht:

* Schrijf je bericht in de tegenwoordige tijd
* Gebruik Engels.
* Wees specifiek


| commit message|comment |
|----------------|----|
| bug was fixed | *niet goed*: te algemeen, verleden tijd |
| add great feature | *niet goed*: te algemeen |
| fix spelling in readme file | *goed*: specifiek en duidelijk, Engels|



:::tip 
Uiteraard zijn bovenstaande afspraken geen wetmatigheden. Vaak worden deze afspraken gebruikt als basis, en worden er per project nog bijkomende afspraken gemaakt. Zo zie je vaak projecten waarbij elke commit message moet voorafgegaan worden door een bepaalde tag, die bijvoorbeeld het buildproces kan beïnvloeden, of voor een link zorgt met een issue tracker, QA mechanisme, ...
:::




