# Pull & push

## Remotes

Om te werken met een remote repository is een remote nodig. Dat is een link naar de repository die ergens anders gehost is.

Als je een repo kloont, dan is de remote standaard al bekend (zie verder), en hoef je verder niks te doen. (typisch heeft die remote dan als naam 'origin')

Als je zelf een repo maakte, en je wil die achteraf linken aan een remote repository, dan moet je die wel zelf toevoegen.

Dat kan met volgend commando:

```
git remote add mijngitserver git://....
```

## Pull

Eens je repository gekoppeld is aan een bepaalde 'remote', moet je soms de updates binnen halen die op de 'remote' gebeurd zijn. 

Dat kan met `git pull`. Dat commando doet eigenlijk twee dingen: 

* De wijzigingen die in de remote gebeurden worden binnen gehaald. (= fetch)
* Er gebeurt een merge (samenvoeging) van je code met de nieuwe updates. Dat gebeurt transparant als er geen conflicten zijn, in het andere geval zal je ze moeten oplossen. Daar komen we later op terug.

Je kan een pull actie dus ook manueel uitvoeren door deze twee commando's te combineren:

```bash
git fetch
git merge
```


## Push

Als je wijzigingen die reeds gecommit werden naar je lokale repository wil toevoegen aan de centrale repository, dan zal je moeten pushen. 

Het volledige commando [^1] daarvoor is:

```bash
git push 'remote_name' 'branch_name'
```

Je kan ook simpelweg `git push` doen zonder verdere opties, maar dan vertrouw je op de defaults voor remote en branch, en dat is niet zonder risico.

Omdat we nog niks vertelden over branches, kan je er voorlopig vanuit gaan dat deze op 'master' staat. 

:::note 
In nieuwe git-repo's zal je vaak zien dat 'master' vervangen werd door 'main'. Dat gebeurt omdat de eerste term zeker in Angelsaksische landen gevoeligheden kan opwekken vanwege referenties aan slavernij.
:::

[^1]: 'Volledig' is de waarheid geweld aan doen: er zijn heel erg veel andere opties die kunnen meegegeven worden, zie [https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push)