module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [ // all files that are to be mutated and all tests must be included
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app.js',
        'app.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: 'trace',
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  })
}
