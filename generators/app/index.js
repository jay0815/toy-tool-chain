const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor (args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  collect() {

  }

  creating() {

  this.fs.copyTpl(
    this.templatePath('package.json'),
    this.destinationPath('package.json'), {
      title: 'Generator'
    }
  )
  this.fs.copyTpl(
    this.templatePath('toyReact.js'),
    this.destinationPath('lib/toyReact.js')
  )

  this.fs.copyTpl(
    this.templatePath('index.js'),
    this.destinationPath('src/index.js')
  )

  this.fs.copyTpl(
    this.templatePath('index.html'),
    this.destinationPath('index.html'), {
      title: 'demo'
    }
  )

  this.fs.copyTpl(
    this.templatePath('webpack.config.js'),
    this.destinationPath('webpack.config.js')
  )

  this.fs.copyTpl(
    this.templatePath('karma.conf.js'),
    this.destinationPath('karma.conf.js')
  )

  this.fs.copyTpl(
    this.templatePath('.babelrc'),
    this.destinationPath('.babelrc')
  )

  this.fs.copyTpl(
    this.templatePath('add.js'),
    this.destinationPath('demo/src/add.js')
  )

  this.fs.copyTpl(
    this.templatePath('test.js'),
    this.destinationPath('test/demo.js')
  )

  this.fs.copyTpl(
    this.templatePath('server.js'),
    this.destinationPath('server.js')
  )

    this.yarnInstall([
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      '@babel/core',
      '@babel/preset-env',
      '@babel/plugin-transform-react-jsx',
      "babel-loader",
      "babel-plugin-istanbul",
      "html-webpack-plugin",
      "chai",
      "karma",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-coverage-istanbul-reporter",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-webpack",
      "koa",
      "koa-static",
      "mocha",
    ], { 'dev': true });

  }
}