module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.name || javascript %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        clean: {
            src: ['<%= pkg.web_assets_dir %>/**']
        },
        copy: {
            development: {
                files: [
                    {   //Move Bower files from bower_components to resources libs folder for development use
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components/',
                        src: [                            
                            //Move all bower libs to resource
                            'requirejs/require.js',
                            'jquery/dist/jquery.js',
                            'backbone/backbone-min.js',
                            'underscore/underscore-min.js'                                                        
                        ],
                        dest: '<%= pkg.source_assets_dir %>/js/libs/'
                    }                    
                ]
            },

            production: {
                files: [
                    {   //Move resources files to public_html folder for production use
                        expand: true,
                        src: [
                            '<%= pkg.source_assets_dir %>/js/**',
                            //Move all libs to resource                            
                        ],
                        dest: '<%= pkg.web_dir %>'
                    }
                ]
            },

            extra: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            '<%= pkg.source_assets_dir %>/images/*'
                        ],
                        dest: '<%= pkg.web_assets_dir %>/images'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            '<%= pkg.source_assets_dir %>/fonts/*',
                            '<%= pkg.source_assets_dir %>/js/lib/bootstrap/fonts/*'
                        ],
                        dest: '<%= pkg.web_assets_dir %>/fonts'
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                preserveComments: false
            },
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= pkg.web_assets_dir %>/js/',
                        src: ['**/*.js'],
                        dest: '<%= pkg.web_assets_dir %>/js/'
                    }
                ]
            }
        },
        less: {
            bootstrap: {
                options: {
                    paths: ['<%= pkg.source_assets_dir %>/less']
                },
                files: {
                    '<%= pkg.source_assets_dir %>/css/sample.css': '<%= pkg.source_assets_dir %>/less/sample.less'
                }
            }
        },
        cssmin: {
            combine: {
                options: {
                    banner: '<%= banner %>',
                    keepSpecialComments: 0
                },
                files: {
                    '<%= pkg.web_assets_dir %>/css/main.css': [
                        '<%= pkg.source_assets_dir %>/css/*'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '<%= pkg.source_assets_dir %>/js/**',
                    '!<%= pkg.source_assets_dir %>/js/lib/**'
                ],
                tasks: ['copy:scripts']
            },
            styles: {
                files: [
                    '<%= pkg.source_assets_dir %>/less/**',
                    '<%= pkg.source_assets_dir %>/css/**'
                ],
                tasks: ['less', 'cssmin']
            },
            extra: {
                files: [
                    '<%= pkg.source_assets_dir %>/images/**',
                    '<%= pkg.source_assets_dir %>/fonts/**'
                ],
                tasks: ['copy:extra']
            }
        },
        serve: {
            options: {
                port: 9000
            }
        },        

        // requirejs : {
        //     my_build : {
        //         options : {
        //             optimize : "none", 
        //             findNestedDependencies : true,
        //             appDir  : "./",
        //             baseUrl : "./",
        //             dir : "./build",
        //             logLevel : 1,
        //             mainConfigFile : [
        //                 "resources/assets/js/rconfig/rconfig.js"
        //             ],
        //             modules : [
        //                 {
        //                     "name" : "resources/assets/js/app",
        //                     create : false
        //                 }
        //             ]
        //         }
        //     }
        // }



        requirejs : {
            compile: {
                options: {
                    name: 'resources/assets/js/app',
                    baseUrl: '',
                    out: 'resources/assets/js/app-build.js',
                    mainConfigFile : [
                        "resources/assets/js/rconfig/rconfig.js"                        
                    ]
                }
            }
        }



    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-serve');

    // tasks
    grunt.registerTask('default', ['clean', 'requirejs', 'copy', 'uglify', 'less', 'cssmin']);


    // watch tasks
    grunt.registerTask('myWatch', ['watch']);


    // connect server task
    grunt.registerTask('server', ['serve']);

    // requireJs to combine all js files and uglify task
    grunt.registerTask('combine', ['requirejs']);


};





