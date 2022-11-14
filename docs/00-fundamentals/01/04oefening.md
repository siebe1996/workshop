# Oefening

Om alles wat gezien werd in dit onderdeel in de vingers te krijgen, doorloop je kritisch onderstaande workflow. Je ziet ook enkele nieuwe commando's, die je vaak zal gebruiken om te werken met Git zoals:

`git status`: hiermee bekijk je de status voor de bestanden in je map: welke werden nog niet opgenomen in de staging area, welke staan klaar om te committen?

`git log`: hiermee bekijk je de recente versiegeschiedenis, met een lijstje van de laatste commits.

`git diff`: hiermee bekijk je het verschil tussen twee versies van een bestand

## Initialisatie 👈

* Open je Git bash terminal (Windows) of je favoriete shell (Linux)
* Indien het nog niet gebeurd is (controleer met `git config --list`), stel dan je user.name en user.email in met het `git config` commando.
* Maak een directory *basic-git* aan, ga in die map en voer `git init` uit om een repository aan te maken.
* Met het commando `git status` kan je zien wat de huidige status is van je repository. In deze fase zal dat uiteraard nog niet veel opleveren...

## Staging & committing 👈

* Maak in dit project een bestand jokes.adoc aan met volgende inhoud:
```markdown
= Git jokes

* The problem with git jokes is that everyone has their own version.

```

* Voer nog eens `git status` uit. Vind je de readme.adoc terug bij de untracked files?

Output:
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        jokes.adoc

nothing added to commit but untracked files present (use "git add" to track)

```

* Plaats dit bestand in de staging area met `git add`
* Ook nu voer je nog eens `git status` uit. Nu is het bestand wel getracked, klaar om toe te voegen in de repository met een commit.
* Commit nu het bestand met `git commit`. Voeg daarbij een passende message toe: "Add first joke".
* Ga met `git log` na als je commit werd opgenomen in de geschiedenis. Je ziet daar ook de integrale commit hash staan. De eerste 7 karakters daarvan worden de commit id genoemd. Je kan die gebruiken om naar een bepaalde commit te refereren, zonder de hele hash te moeten typen.

:::tip

Vind je de output toch wat te spartaans, dan vind je online tal van mensen die met de vele parameters van het log commando speelden om een mooiere output te krijgen.

Probeer bijvoorbeeld:

```bash
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative" 
```
Daarmee maak je een nieuw commando `git lg` aan dat zorgt voor een (subjectief uiteraard 🙂) mooiere output...
:::

## Aanpassingen maken & doorvoeren 👈

* Voeg nog een tweede mop toe aan het bestandje jokes.adoc:

```markdown
* git-blame: ruining friendships since 2006
```

* Stage dit bestand met de nieuwe wijziging, en voer een commit uit met een passende boodschap.
* Controleer met git log de output. 

Output
```
commit 975a757b15102f8604933614f91b267901399a00 (HEAD -> master)
Author: Roel Van Steenberghe <roel.vansteenberghe@odisee.be>
Date:   Sun Apr 11 15:49:14 2021 +0200

    add second joke

commit c6f68c8a12533a3a7e29d973a2029fe79b45ba79
Author: Roel Van Steenberghe <roel.vansteenberghe@odisee.be>
Date:   Sun Apr 11 15:46:13 2021 +0200

    add first joke

```

* Ga met `git diff` na wat het verschil is tussen beide commits. Voeg uiteraard de juiste commit-id's toe

Voorbeeld
```bash
git diff 975a757 C6f68c8
```





