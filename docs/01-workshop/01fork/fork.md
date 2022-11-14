# Forking

## Fork vs clone

Als een GIT repository **gekloond** wordt, blijft de locatie van de centrale repository ongewijzigd en centraal. Je maakt enkel een lokale kopie van de repository waarmee offline kan ontwikkeld worden.

Elke ontwikkelaar die aan deze repo meewerkt, zal zijn kloon dan aan dezelfde 'remote' kunnen koppelen.


Een **fork** daarentegen, zal een compleet nieuwe remote maken. Diegene die de fork maakt zal volledige admin-rechten krijgen over 'zijn' remote. 
De originele ontwikkelaars die aan de 'originele' repo werkten, zullen geen rechten hebben op de fork, tenzij ze daar toestemming voor krijgen.

Het is dus een volledige kopie van de volledige repository.

## Kiezen tussen forken en klonen

Binnen open source projecten is het heel erg gewoon om een fork te maken om aanpassingen te maken: je hebt immers maar heel zelden rechten op de 'originele' repository om daar rechtstreeks wijzigingen in te maken. 

Dat kan gebeuren met de bedoeling om een afwijkende versie te maken van een bepaald stuk software (denk bijvoorbeeld aan MariaDB dat een fork is van MySQL), of met de bedoeling om wijzigingen te maken aan de software en die eventueel terug te sturen naar de originele repository.

Binnen afgelijnde ontwikkelteams is de strategie van het klonen in combinatie met branching dan weer meer ingeburgerd. Je maakt dan een branch aan die je na de aanpassingen kan mergen met één van de centrale branches. 



