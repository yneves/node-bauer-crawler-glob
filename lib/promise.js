/*!
**  bauer-crawler-glob -- Plugin for bauer-crawler to list files with node-glob.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-crawler-glob>
*/
// - -------------------------------------------------------------------- - //

"use strict";

// - -------------------------------------------------------------------- - //

module.exports = {
  
  glob: {
    
    // .glob() :Promise
    0: function() {
      return this.then(function(pattern) {
        return this.promise().glob({
          pattern: pattern
        });
      });
    },
    
    // .glob(pattern String) :Promise
    s: function(pattern) {
      return this.then(function() {
        return this.promise().glob({
          pattern: pattern
        });
      });
    },
    
    // .glob(options Object) :Promise
    o: function(options) {
      return this.then(function() {
        return this.requestWorker("glob",options).get("files");
      });
    }
    
  }
      
};

// - -------------------------------------------------------------------- - //
