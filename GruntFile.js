'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'public/sass',
          src: ['**/*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};