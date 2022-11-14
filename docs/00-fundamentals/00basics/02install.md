---
id: install-git
title: Installatie van GIT
sidebar_position: 2
---

# Installatie


Iedere ontwikkelaar die gebruik wil maken van GIT zal allereerst de installatie daarvan moeten doen op z'n eigen machine.

## Download en installeer Git 👈

Op https://git-scm.com vind je de laatste nieuwe versie van GIT. De installer voor Windows wordt gebundeld met enkele basic tools (zoals de GIT Bash) die ook later nog van pas zullen komen.

De default instellingen van de Windows installer zijn prima bruikbaar, al kan je overwegen om bijvoorbeeld de standaardeditor aan te passen naar je favoriete editor of notepad. Default wordt VI gebruikt, een krachtige, maar complexe editor die je misschien afschrikt.

Een andere keuze die je (enkel op Windows) moet maken is hoe je de Git-tools wil integreren in je besturingssysteem. Volg ook daar de aanbevolen keuze:

<p align="center">

![](/img/git/gitinstallerpath.png)

</p>

Daarmee kan het Git-commando ook in je Powershell of command prompt gebruiken. 

Lees ook de volgende keuzeschermen goed door, maar behoud overal de standaardconfiguratie die voorgesteld wordt.

Werk je met een ander besturingssysteem, dan vind je op git-scm.com ook een beknopte handleiding voor de installatie.

## Configureer GIT 

Er is bijna geen configuratie noodzakelijk om van start te gaan met GIT. Het enige wat je zeker moet doen is GIT vertellen wie je bent door het emailadres op te geven. 
We doen dit in het voorbeeld globaal op je computer, maar je dat kan ook fijnmaziger als je bijvoorbeeld voor verschillende opdrachtgevers werkt..

Dat is nodig omdat elke commit (=wijziging) die je maakt dit emailadres zal bevatten, zodat je collega's duidelijk kunnen zien wie de wijziging aanbracht.

```bash
git config --global user.email "your_email@example.com"
```


:::caution
historisch gezien zijn verschillende besturingssystemen wat uit elkaar gegroeid als het gaat over het starten van een nieuwe lijn in een document. Met de standaardinstallatie in Windows zal GIT zal achter de schermen ervoor zorgen dat het karakter voor een nieuwe lijn op Windows vertaalt wordt naar een Unix/Mac variant daarvan. Dit wordt geconfigureerd met `git config --global core.autocrlf true`, maar zou moeten goed ingesteld staan als je de installer volgde met de default settings.
:::

## Maak credentials aan 

Hoewel je repositories kan klonen (=kopiëren) over https, raden we je aan om **waar mogelijk steeds SSH te gebruiken** als transportmechanisme. Eén van de redenen is dat we dan kunnen gebruik maken van een assymetrisch key-pair voor extra veiligheid. 

Daarvoor moet je op je pc een koppel keys aanmaken (public en private), waarvan je dan het publieke exemplaar kan uploaden op gitlab.com

Je kan dat doen in de GIT Bash die standaard meegeleverd wordt met de installatie van GIT. In deze console zijn tools als OpenSSL ook beschikbaar.


```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/student/.ssh/id_rsa): <1>
Created directory '/c/Users/student/.ssh'.
Enter passphrase (empty for no passphrase): <2>
The key's randomart image is:
+---[RSA 3072]----+
|     .      .    |
|    . o.  o. ..  |
|     o o=+.o.+ . |
|      ..+O* ..B  |
|      . S+=E o.+ |
|     o   =. . +. |
|      o + +. o.o.|
|       . ..+.*.o.|
|         ...= +..|
+----[SHA256]-----+
```

**<1>** ssh-keygen zal voorstellen om je key te bewaren in je 'home'-folder, in een submap .ssh. Dat is prima, omdat het ook de standaardmap is waar (quasi) elke ssh-tool zal zoeken als er een key nodig is. <br/>
**<2>** Geef een sterk wachtwoord op. Daarmee wordt je private key beveiligd, en heb je 2-factor authenticatie: het stelen van je private key is dan niet genoeg, men moet daarnaast ook nog je wachtwoord weten. Naarmate je meer repositories gebruikt, servers beheert etc wordt deze key steeds belangrijker. Het is dus extreem belangrijk om het wachtwoord hier erg goed te kiezen.


In je home folder van je besturingssysteem (cd ~) vind je in de (verborgen) map .ssh nu twee bestanden: een public en een private key, die zonder elkaar weinig waard zijn. Om te encrypteren heb je de ene nodig, om te decrypteren de andere.

__id_rsa__: dit is de private key die je net hebt aangemaakt, beveiligd met het wachtwoord dat je zelf koos. De kans is groot dat dit het belangrijkste bestand op je pc wordt, waarmee je later broncode zal aanpassen, servers beheren, cloud-omgevingen configureren etc. Draag er dus heel erg goed zorg voor. Dit bestand mag **NOOIT** in de handen van anderen vallen. Plaats de key dus ook nooit in repositories, CI/CD taken, ...

__id_rsa.pub__: dit is je publieke key. Die kan je delen met iedereen en toevoegen op je git-server. Die server weet dan dat hij iedereen kan vertrouwen die toegang heeft tot de bijhorende private key.

Je mag bovenstaande bestanden uiteraard hernoemen als je dat duidelijker vindt. 

<p align="center">

![add 2 keys](/img/git/2keys.png)

</p>

## Toevoegen van je public key op Gitlab. 

In je Gitlab-profiel kan je je public (!) key(s) uploaden. Gitlab kan je op basis daarvan authenticeren.

![add keys](/img/git/addkeys.png)



:::tip 
public keys kan je zonder risico delen met de wereld. Eens je je key oplaadt naar GitHub of Gitlab is dat eigenlijk ook zo, je kan de keys van iemand eenvoudig downloaden via een standaardlink:
https://gitlab.com/username.keys of https://github.com/username.keys
:::

