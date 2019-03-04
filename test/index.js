"use strict";

var should = require("chai").should();
var vertcore = require("../");

describe('#versionGuard', function() {
  it('global._vertcore should be defined', function() {
    should.equal(global._vertcore, vertcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      vertcore.versionGuard('version');
    }).should.throw('More than one instance of vertcore');
  });
});
