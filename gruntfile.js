module.exports = function(grunt) {
    grunt.initConfig({
      watch: {
        files: ['**/*'],
        tasks: ['nodeunit'],
      },
      nodeunit: {
        all: ['test/*.js'],
        options: {
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
};

