Grunt Webbiker Boilerplate
==================================================
Created by, [Joost Brommert](info@webbiker.nl)


Introductie
------------

Voor het maken compileren van de css en javascript code maken we gebruik van Grunt.
Dit is een Javascript Task Manager. Meer info over Grunt kun je hier vinden: http://gruntjs.com/

Met Grunt voeren we een aantal taken uit, elke keer als we een (S)CSS of Javascript opslaan.
Deze taken zijn onder andere het compileren, minimaliseren en prefixen van de Sass code.


Vereisten
---------

Voor het laten werken van de configuratie is ten eerste Ruby en Sass vereist.

  1. Check in de terminal of je Ruby hebt met het commando: `ruby -v`
Krijg je geen versie nummer terug, dan moet je Ruby nog installeren:
https://www.ruby-lang.org/en/documentation/installation/

  2. Check in de terminal of je Sass hebt met het commando: `sass -v`
Krijg je geen versie nummer terug dan moet je Sass nog installeren met het commando:
`gem install sass`


Installatie
------------

  1. Ga naar je project folder en installeer Grunt: `npm install grunt --save-dev`
  2. Installeer de volgende tasks:
    1. grunt-contrib-sass: `npm install grunt-contrib-sass --save-dev`
       Voor het gebruik van Sass & Compass.
    2. grunt-contrib-watch: `npm install grunt-contrib-watch --save-dev`
       Voor het runnen van Grunt elke keer als we (S)CSS/JS saven.
    3. grunt-autoprefixer: `npm install grunt-postcss autoprefixer --save-dev`
       Voegt automisch prefix properties toe in de CSS voor de browsers die we willen ondersteunen
    4. grunt-contrib-uglify: `npm install grunt-contrib-uglify --save-dev`
       Voegt Javascript samen en uglified deze.
  3. Grunt maakt gebruik van livereload, hiervoor is een browser extensie nodig, zoek voor Chrome of Firefox naar de LiveReload extensie/plugin en installeer deze.
  4. Packages worden geïnstalleerd een `node_modules` folder, zorg er voor dat deze map in de ignore lijst van je SVN client staat.
     Package.json en Gruntfile.js moeten wel ingecheckt worden, zodat iedereen dezelfde configuratie heeft.


Troubleshooting
---------------

Het kan zijn dat je niet de rechten hebt om de bovenstaande commando's uit te voeren.
Voer ze dan uit als root door er sudo voor te typen, dus bijvoorbeeld:
`sudo npm install grunt --save-dev`

Als bepaalde packages niet werken, dan kan het zijn dat de installatie van Node.js bijgewerkt moet worden.
`sudo npm cache clean -f`
`sudo npm install -g n`
`sudo n stable`

Gebruik
-------

Ga in de terminal naar de project folder. Voor het éénmalig runnen van de Task Manager type `grunt`.
Voor het automatisch runnen van de Task Manager bij elke save type `grunt watch`.
