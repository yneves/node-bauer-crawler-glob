/*!
**  bauer-crawler-glob -- Plugin for bauer-crawler to list files with node-glob.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-crawler-glob>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var fs = require("fs");
var path = require("path");
var glob = require("glob");
var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

module.exports = function(worker,config) {
  
  worker.on("request",function(request,response) {
    
    var options = factory.merge(config.options, request.options);
    
    glob(request.pattern, options, function(error,files) {
      if (error) {
        response.sendError(error);
      } else {
        response.sendOk({
          files: files
        });
      }
    })
    
  });
  
  worker.sendReady();
  
};

// - -------------------------------------------------------------------- - //
