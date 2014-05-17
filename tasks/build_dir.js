/*
 * grunt-build-dir
 *
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('build_dir', 'The best Grunt plugin ever.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      mode: null,
      create: []
    });

    var mkdir = function(filepath) {
      grunt.log.write('Creating "' + filepath + '"...');

      try {
        grunt.file.mkdir(filepath, options.mode);
        return grunt.log.ok();
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        return grunt.fail.warn('mkdir operation failed.');
      }
    };


    if (typeof options.create === 'object') {
      for (var i in options.create) {
        mkdir(options.create[i]);
      }
    }

  });

};