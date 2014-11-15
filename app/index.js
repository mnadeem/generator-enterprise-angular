'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  //this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

  this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
  if (!this.options['skip-welcome-message']) {
    this.log(
      chalk.magenta(
        'Out of the box I include Bootstrap and some AngularJS recommended modules.' +
        '\n'
      )
    );
  }
};

Generator.prototype.askRequiredData = function askRequiredData() {

  var done = this.async();

  var prompts = [{
    name: 'sname',
    message: 'Please enter your Application short name',
    required: true
  }];

  this.prompt(prompts, function (props) {
	this.sname = props.sname;
	this.appname = this.sname + '-' + this.appname
    done();
  }.bind(this));
};

Generator.prototype.startWriting = function startWriting() {
	this.app  = function () {

	  this.createFolders();
	  this.copyMetaFiles();	  
	  this.copyRequiredFiles();
    };
	this.createFolders  =  function() {
	  this.mkdir('app');
	  this.mkdir('app/src');
	  this.mkdir('app/images');
	  this.mkdir('app/styles');
	  this.mkdir('app/src');


	  this.createScriptFolders();
	};
	this.createScriptFolders  =  function() {
	  this.mkdir('app/src/components');
	  this.mkdir('app/src/components/confirmation');

	  this.mkdir('app/src/plan');
	  this.mkdir('app/src/plan/details');
	  this.mkdir('app/src/plan/summary');
	  
	  this.mkdir('build');
	  this.mkdir('build/config');
	};
	this.copyProjectFiles  = function () {
      this.copy('bowerrc', '.bowerrc');
	  this.copy('editorconfig', '.editorconfig');
	  this.copy('jshintrc', '.jshintrc');
	  this.copy('gitignore', '.gitignore');
    };
	this.copyMetaFiles  = function () {
      this.copy('_package.json', 'package.json');
	  this.template('_bower.json', 'bower.json');
	  this.copy('_Gruntfile.js', 'Gruntfile.js');
    };
	this.copyRequiredFiles  = function () {
	  this.copy('app/styles/main.css', 'app/styles/main.css');
	  this.template('app/index.html', 'app/index.html');

	  this.template('app/src/app.js');
	  this.template('app/src/config.js');

	  this.template('app/src/components/app.js');
	  this.template('app/src/components/confirmation/app.js');
	  this.template('app/src/components/confirmation/confirmation.tpl.html');
	  this.template('app/src/components/confirmation/controllers.js');
	  this.template('app/src/components/confirmation/directives.js');

	  this.template('app/src/plan/app.js');
	  this.template('app/src/plan/config.js');
	  this.template('app/src/plan/main.tpl.html');

	  this.template('app/src/plan/details/app.js');
	  this.template('app/src/plan/details/controllers.js');
	  this.template('app/src/plan/details/main.tpl.html');

	  this.template('app/src/plan/summary/main.tpl.html');
    };
	this.copyBuildFiles  = function () {
      //this.bulkDirectory('build', 'build');
	  this.copy('build/config/aliases.yaml');
	  this.copy('build/config/appConfig.js');
	  this.copy('build/config/autoprefixer.js');
	  this.copy('build/config/buildConfig.js');
	  this.copy('build/config/clean.js');
	  this.copy('build/config/codepainter.js');
	  this.copy('build/config/complexity.js');
	  this.copy('build/config/concurrent.js');
	  this.copy('build/config/connect.js');
	  this.copy('build/config/copy.js');
	  this.copy('build/config/eslint.js');
	  this.copy('build/config/filerev.js');
	  this.copy('build/config/html2js.js');
	  this.copy('build/config/htmlmin.js');
	  this.copy('build/config/imagemin.js');
	  this.copy('build/config/jscpd.js');
	  this.copy('build/config/jshint.js');
	  this.copy('build/config/karma.js');
	  this.copy('build/config/ngAnnotate.js');
	  this.copy('build/config/plato.js');
	  this.copy('build/config/svgmin.js');
	  this.copy('build/config/usemin.js');
	  this.copy('build/config/useminPrepare.js');
	  this.copy('build/config/watch.js');
	  this.copy('build/config/wiredep.js');
	  
    };

	this.copyTestFiles  = function () {
      this.bulkDirectory('test', 'test');
    };
	this.app();
	this.copyProjectFiles();
	this.copyBuildFiles();
	this.copyTestFiles();
};

Generator.prototype.postProcess = function postProcess() {
	this.log('Going to instal dependecies.....' + this.appname);
	this.installDependencies();
};
