// - -------------------------------------------------------------------- - //

"use strict";

var fs = require("fs");
var assert = require("assert");
var Crawler = require("bauer-crawler");

var crawler = new Crawler({
  config: {
    glob: {
      
    }
  }
});

crawler.loadPlugin(__dirname + "/../../");

crawler.start(function() {
  
  return this.Promise
    .glob(__dirname + "/*.js")
    .then(function(files) {
      assert.deepEqual(files,[__dirname + "/sample.js"]);
    });
});

// - -------------------------------------------------------------------- - //
