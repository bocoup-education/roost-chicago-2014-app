'use strict';

module.exports = function(grunt) {
  grunt.config.set('jshint', {
    build: {
      options: {
        jshintrc: '.jshintrc',
      },
      src: ['*.js', 'build/**/*.js'],
    },
    app: {
      options: {
        jshintrc: 'src/.jshintrc',
      },
      src: 'src/**/*.js',
    },
    'test-unit': {
      options: {
        jshintrc: 'test/unit/.jshintrc'
      },
      src: 'test/unit/tests/*.js',
    },
    'test-integration': {
      options: {
        jshintrc: 'test/integration/.jshintrc'
      },
      src: ['test/integration/*.js']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
