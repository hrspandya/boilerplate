module.exports = function(grunt) {

    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.name || javascript %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        clean: {
            src: ['<%= pkg.web_assets_dir %>/**']
        },
        copy: {
            scripts: {
                files: [
                    {
                        expand: true,
                        src: [
                          '<%= pkg.source_assets_dir %>/js/**',
                            // '<%= pkg.source_assets_dir %>/js/app/**',
                            // '<%= pkg.source_assets_dir %>/js/require.config.js',
                            // '<%= pkg.source_assets_dir %>/js/lib/requirejs/require.js',
                            // '<%= pkg.source_assets_dir %>/js/lib/jquery/dist/jquery.js',
                            // '<%= pkg.source_assets_dir %>/js/lib/bootstrap/dist/js/bootstrap.js',
                            // '<%= pkg.source_assets_dir %>/js/lib/bootstrap/js/**'
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
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');

    // tasks
    grunt.registerTask('default', ['clean', 'copy', 'uglify', 'less', 'cssmin']);


    // watch tasks
    grunt.registerTask('myWatch', ['watch']);


    // connect server task
    grunt.registerTask('server', ['serve']);


};





