/*!
**  bauer-plugin-glob -- Plugin for bauer-crawler to list files with node-glob.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-glob>
*/
// - -------------------------------------------------------------------- - //

"use strict";

module.exports = {
  
  name: "glob",
  
  config: {
    workers: 1,
    options: {}
  },
  
  worker: __dirname + "/worker.js",
  promise: __dirname + "/promise.js"
  
};

// - -------------------------------------------------------------------- - //
