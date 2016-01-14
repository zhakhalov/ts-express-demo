var grunt = require('grunt');

grunt.initConfig({
  //-----------------------------------------------------------------------------------------------
  //                                                                                         concat
  //-----------------------------------------------------------------------------------------------
  concat: {
    /**
    * Concatenate 3-rd party libs
    */
    vendor: {
      src: [
        'public/bower_components/jquery/dist/jquery.js',
        'public/bower_components/bootstrap/dist/js/bootstrap.js',
        'public/bower_components/lodash/lodash.js',
        'public/bower_components/angular/angular.js',
      ],
      dest: 'public/dist/app.vendor.js'
    },
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                           sass
  //-----------------------------------------------------------------------------------------------
  sass: {
    /**
     * Generate pretty printed css with source maps
     */
    dev: {
      options: {
        sourceMap: true
      },
      files: {
        'public/dist/app.bundle.css': 'public/stylesheets/app.scss'
      }
    }
  },
  // -----------------------------------------------------------------------------------------------
  //                                                                                             ts
  // -----------------------------------------------------------------------------------------------
  ts: {
    options: {
      compiler: 'node_modules/typescript/bin/tsc'
    },
    client: {
      tsconfig: {
        tsconfig: 'public/tsconfig.json',
        updateFiles: false
      }
    },
    server: {
      tsconfig: {
        tsconfig: 'tsconfig.json'
      }
    }
  },
  // -----------------------------------------------------------------------------------------------
  //                                                                                          watch
  // -----------------------------------------------------------------------------------------------
  watch: {
    sass: {
      files: 'public/stylesheets/**/*.scss',
      tasks: ['sass:dev']
    },
    tsServer: {
      files: [
        '**/*.ts',
        '!public/**/*.ts' // ignore client-side scripts
      ],
      tasks: ['ts:server']
    },
    tsClient: {
      files: 'public/app/**/*.ts',
      tasks: ['ts:client', 'concat:vendor']
    }
  },
  // -----------------------------------------------------------------------------------------------
  //                                                                                      concurent
  // -----------------------------------------------------------------------------------------------
  concurrent: {
    dev: {
      options: {
        logConcurrentOutput: true,
      },
      tasks: [
        'watch:sass',
        'watch:tsServer',
        'watch:tsClient',
      ],
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-concurrent');

/**
 * Build production version of application
 */
grunt.registerTask('build', []);

/**
 * Run development helpers
 */
grunt.registerTask('dev', ['sass:dev', 'ts:server', 'ts:client', 'concat:vendor', 'concurrent:dev']);