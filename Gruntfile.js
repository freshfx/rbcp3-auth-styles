module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "build/style.css": "dev/main.less"
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'build/style.min.css': ['build/style.css']
        }
      }
    },

    watch: {
      styles: {
        files: ['dev/**/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['less', 'watch']);
};
