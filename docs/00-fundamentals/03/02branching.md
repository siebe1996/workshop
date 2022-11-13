# Branching

Een groot deel van de kracht van Git zit in het gebruik van branches. Daarmee kan je -zonder overhead!- een afsplitsing maken van je code. De redenen om dat te doen kunnen talrijk zijn. 

Typische redenen om dat te doen:


* **Feature branch**: een branch om een nieuwe feature te ontwikkelen, zonder dat de 'main' thread daarvan impact ondervindt.
* **Experimental branch**: een branch die je aanmaakt voor wat testen, en die je ook steeds kan dumpen als de test niet meer relevant is
* **Bugfix branch**: branch met als specifiek doel om een bepaalde bug te fiksen. Deze branch kan dan gemerged worden in de 'main' branch, of zelfs in meerdere branches indien relevant.
* **Gewoon, omdat het kan** : omdat er geen overhead is aan het aanmaken van nieuwe branches, staat het je vrij om er als programmeur aan te maken en te verwijderen. Je maakt er beter teveel dan te weinig...

Om een overzicht te krijgen van de bestaande branches, gebruik je het commando `git branch`. Eigenlijk is dat gewoon een alias voor `git branch --list`.

:::tip
Als je een branch aanmaakt, bestaat die enkel lokaal. Wil je dat ook anderen je branch kunnen zien, dan moet je ook die pushen
:::

Branchen is eigenlijk erg simpel: 


```bash
# branch aanmaken
git branch <naamvanbranch>

# branch activeren
git checkout <naamvanbranch>
```

In onderstaande video worden verschillende manieren uitgelegd om te werken met branches

Codemy.net video over branching:

<p align="center">
<iframe width="675" height="380" src="https://www.youtube.com/embed/JTE2Fn_sCZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ali></iframe>
</p>


bron: https://youtu.be/JTE2Fn_sCZs
