/*global module:false*/
module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                globals: {
                    it: true,
                    describe: true,
                    chai: true,
                    beatsheet: true
                }
            },
            all: ['Gruntfile.js','js/*.js','test/spec/*.js']
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            dist: {
                files: {
                    'dist/beatsheet.min.js' : 'js/beatsheet-es5.js'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        babel: {
            dist: {
                files: {
                    'js/beatsheet-es5.js': 'js/beatsheet.js'
                }
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['js/beatsheet.js']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-eslint');

    // Default task.
    grunt.registerTask('default', ['eslint', 'babel', 'uglify']);
    grunt.registerTask('test', ['default', 'karma']);
};