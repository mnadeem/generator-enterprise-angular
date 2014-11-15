'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
  this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
  if (!this.options['skip-welcome-message']) {
    this.log(yosay());
    this.log(
      chalk.magenta(
        'Out of the box I include Bootstrap and some AngularJS recommended modules.' +
        '\n'
      )
    );
  }
};

Generator.prototype.askRequiredData = function askRequiredData() {
  this.log('Going to Prompt for required data.....');
  var done = this.async();

  var prompts = [{
    name: 'sname',
    message: 'Please enter your Application short name',
    required: true
  }];

  this.prompt(prompts, function (props) {
	this.sname = props.sname;
    done();
  }.bind(this));
};

Generator.prototype.startWriting = function startWriting() {
	this.app  = function () {
      this.log('Creating app related files.....');
	  this.createFolders();
	  this.copyMetaFiles();
    };
	this.createFolders  =  function() {
	  this.mkdir('app');
	  this.mkdir('app/src');
	  this.mkdir('app/images');
	  this.mkdir('app/styles');
	  this.mkdir('app/src');
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
	this.copyBuildFiles  = function () {
      this.bulkDirectory('build', 'build');
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
	this.log('Going to instal dependecies.....');
	this.installDependencies();
};
