# Clone

Als je gaat werken met een bestaande repository, dan zal `git clone` vermoedelijk het eerste zijn wat je gaat doen: je maakt dan een lokale kopie van de online broncode, inclusief de geschiedenis.

Zelfs een kleine repository kan dus een grote download betekenen, als die reeds veel geschiedenis heeft.
Het gemak aan deze werkwijze is dat je ook automatisch de juiste remote geconfigureerd wordt.

```
git clone git://<link>.git
```

De alternatieve werkwijze om te starten met Git is in een lokale directory het commando `git init` uitvoeren, waardoor je een repository aanmaakt in een .git directory. De remote (=de link naar de remote repo) moet je dan zelf toevoegen.

```
git init
git remote add gl-remote git@git.server.com:dir/repo.git
```

:::tip
De naam van de remote kan je vrij kiezen. Standaard is dat 'origin', maar je kan ook meer beschrijvende namen kiezen, zeker als je meerdere remotes gebruikt. (zoals bijvoorbeeld 'gl-remote') in bovenstaand syntaxvoorbeeld.
:::
