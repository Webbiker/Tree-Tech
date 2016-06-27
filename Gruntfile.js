module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: [
          'assets/js/libs/jquery-1.12.0.min.js',
          'assets/js/libs/isotope.pkgd.js',
          'assets/js/*.js'
        ],
        dest: 'assets/js/build/app.min.js'
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']}
          )
        ]
      },
      dist: {
        src: 'assets/css/screen.css'
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'            // nested, compact, compressed, expanded
        },
        files: {                         // Dictionary of files
          'assets/css/screen.css': 'assets/sass/screen.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true                  // Set to false if you don't have the LiveReload extension/plugin for your browser
      },
      html: {
        files: ['*.html', '*.php']
      },
      css: {
        files: ['assets/sass/*.scss', 'assets/sass/partials/*.scss'],
        tasks: ['sass', 'postcss']
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['uglify']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss', 'uglify']);
  grunt.registerTask('auto', ['watch']);

};
