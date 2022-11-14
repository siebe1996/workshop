# Oefening

## Online simulatie

Op https://learngitbranching.js.org/ kan je git commando's in een sandbox uitvoeren. Voer de eerste vier oefeningen uit die je vindt bij de 'introduction sequence'

## Sandbox

Bouw op de sandbox https://git-school.github.io/visualizing-git/ volgende setup na aan de hand van onderstaande instructies. Probeer te begrijpen waar de HEAD telkens naar wijst.

![merge](/img/git/branchmerge.png)

* doe een eerste commit (first commit) op de master branch
* doe een tweede commit (feat1) op de master branch
* maak een nieuwe branch test, bedoeld om een experimentele feature te bouwen
* checkout de nieuwe test-branch, en doe er twee commits in
* ga terug naar de master branch
* merge de test branch met de master branch. (vanop de master branch voer je het commando `git merge test` uit) Verdere details over hoe zo'n merge (=samenvoegen) werkt zien we in een volgende pagina.

Als alles goed liep, zou je bovenstaand schema moeten zien als resultaat.

## Gitlab 👈

Maak een nieuwe repo lab-branching aan in Gitlab.

* Kloon deze repository lokaal.
* Maak in de repo een bestand aan met de naam "production.txt".
* voeg het bestand toe aan GIT (git add) 
* commit je wijzigingen. 


Een vraagje tussendoor: is er intussen al iets gewijzigd aan je repo in Gitlab? Wat moet gebeuren om daar ook de wijzigingen te zien?

```
<antwoord>
```

Voer uiteraard ook deze laatste stap uit.

## Branching en fast-forward merging 👈

* Ga in de git bash terug naar de map die we in een eerdere oefening maakten.
* Maak een nieuwe branch "joke3" aan met het `git branch` commando.
* Kijk nog even na op welke branch je momenteel zit met `git branch`
* Wissel naar de nieuwe branch met `git checkout joke3`
* Kijk na als dat gelukt is met `git branch`
* Voeg een nieuwe mop toe aan het bestand jokes.adoc
  
```markdown
* Knock knock. Who's there? Git. 
  Git-who? 
  Sorry, 'who' is not a git command - did you mean 'show'?
```

* Stage en commit deze wijziging in de huidige actieve branch
* Ga met `git log` kijken naar de commit history
* Ga terug naar de master branch
* Merge de wijzigingen die we maakten in de feature branch met `git merge joke3`
* Als de merge een succes is, kan je de feature branch verwijderen met `git branch -d joke3`
* Met `git branch` kan je vaststellen dat de joke3 branch effectief ook weg is.

## Omgaan met merge conflicts 👈

* Maak een nieuwe branch 'fixjoke' aan.
* Pas daar de tweede mop aan in het bestand joke.adoc: verander het jaartal naar 2005 (het jaar dat Git ontworpen werd)
* Stage en commit deze wijziging (net zoals je eerder al deed met de joke3 branch)
* Ga naar je master branch en pas daar het jaartal aan naar 2007.
* Ook hier stage en commit je deze wijziging
* Voer vanuit de master branch een merge uit: `git merge fixjoke`

Het resultaat is uiteraard dat er een merge conflict is. Git kan niet weten als de wijziging van het jaartal moet resulteren in 2005 of 2007.

* Editeer het bestand joke.adoc. Corrigeer daar het merge conflict manueel, verwijder dus ook alle andere lijnen die na het mergen overbodig zijn. (ook de regels met `<<<<<<`, `=====` en `>>>>>)
* Als je tevreden bent over het eindresultaat, kan je terug committen. 
