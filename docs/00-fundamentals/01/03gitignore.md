# Ignore files

Niet alle bestanden wil je even graag onder versiecontrole. Een IDE kan bijvoorbeeld de gewoonte hebben om bestanden toe te voegen in je project waarvan er geen enkele meerwaarde is om die te delen met anderen.

Vaak is het ook niet gewenst om bestanden toe te voegen in version control die het resultaat zijn van een automatisch proces. Meest voorkomende voorbeeld is de output van je builds: die bestanden bewaar je liever niet in git.

Een andere reden om bestanden niet aan GIT toe te voegen kan bijvoorbeeld veiligheid zijn. Je wil niet dat wachtwoorden of API keys in GIT terecht komen.

:::warning 
Voeg je toch een API-key, wachtwoord, ... toe aan Git, dan kan je die commit alsnog achteraf verwijderen. Als je de fout pas bemerkt na het pushen, dan moet je ervan uitgaan dat je keys gecompromiteerd zijn. Er zijn bots actief die 24/7 GitHub afschuimen op zoek naar gevoelige informatie.
:::

De makkelijkste oplossing daarvoor is gebruik maken van een .gitignore file, waarin je bestandsnamen of wildcards kan toevoegen voor bestanden of bestandstypes die je niet in GIT wil hebben.

:::tip 
Voor de meeste programmeertalen en IDE's zijn er al zo'n .gitignore files te vinden. Je hoeft dus zeker het warm water niet uit te vinden.
:::

Voorbeeld van een eenvoudige .gitignore voor Python projecten:

```gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

```

