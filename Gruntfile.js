/*global module:false*/
module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-eslint');

    // Default task.
    grunt.registerTask('default', ['eslint', 'babel', 'uglify']);
    grunt.registerTask('test', ['default', 'karma']);
};