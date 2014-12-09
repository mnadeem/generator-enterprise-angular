# The Enterprise Angular generator 

## Directory Structure

```
enterprise-angular-app
|   .bowerrc
|   .editorconfig
|   .gitignore
|   .jshintrc
|   bower.json
|   Gruntfile.js
|   package.json
|   
+---app
|   |   index.html
|   |   
|   +---images
|   +---src
|   |   |   app.js
|   |   |   config.js
|   |   |   
|   |   +---module-parent2
|   |   |   |   app.js
|   |   |   |   config.js
|   |   |   |   
|   |   |   \---module-child1
|   |   |           app.js
|   |   |           main.tpl.html
|   |   |           controllers.js
|   |   |           directives.js
|   |   |           config.js
|   |   |           
|   |   \---module-parent2
|   |       |   app.js
|   |       |   config.js
|   |       |   
|   |       +---module-child1
|   |       |       app.js
|   |       |       controllers.js
|   |       |       main.tpl.html
|   |       |       
|   |       \---module-child2
|   |              
|   |               
|   \---styles
|           main.css
|           
+---build
|   \---config
|           aliases.yaml
|           appConfig.js
|           autoprefixer.js
|           buildConfig.js
|           clean.js
|           codepainter.js
|           complexity.js
|           concurrent.js
|           connect.js
|           copy.js
|           eslint.js
|           filerev.js
|           html2js.js
|           htmlmin.js
|           imagemin.js
|           jscpd.js
|           jshint.js
|           karma.js
|           ngAnnotate.js
|           plato.js
|           svgmin.js
|           usemin.js
|           useminPrepare.js
|           watch.js
|           wiredep.js
|           
+---node_modules
+---test
|   |   karma.conf.js
|   |   
|   \---spec
|       \---module-parent1
|           \---module-child1
|                   controllers.js
|                   
|                   
\---vendor


```


## Installation

Install [Git](http://git-scm.com), [node.js](http://nodejs.org)

Install Yeoman:
```
    npm install -g yo
```
Install the Enterprise Angular generator :
```
    npm install -g generator-enterprise-angular
```

In a new directory, generate the project:
```
    yo enterprise-angular
```

## Features

* Lots of useful plugins incorporated

**Quality Metrics Plugins **:   copy/paste detection using jscpd, Metrics report generation using plato, linting using eslint and coding styling using code painter
**Build Plugins**   : Modularize build files using load-grunt-config
**Development plugins**   : watch, connect, proxy, *** min, wiredep and more
