// Karma configuration
// Generated on Sun Aug 23 2015 05:29:16 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-ajax', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [      
      'resources/assets/js/test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //PhantomJs, Chrome
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Code coverage
    coverageReporter: {
        dir: "test/javascript/coverage",
        watermarks: {
            statements: [65, 85],
            functions: [65, 85],
            branches:[65, 85],
            lines: [65, 85]
        },
        reporters: [
            {type: "html" ,"subdir" : "html", includeAllSources:true},
            {type: "cobertura", subdir: "cobertura", file: "cobertura.xml", includeAllSources: true},
            {type: "text", includeAllSources: true},
            {type: "text-summary"}
        ]
    }



  })
}
