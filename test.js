'use strict';
var assert = require('assert');
var passPathToCrossSpawn = require('./');

it('should ', function () {
  assert.strictEqual(passPathToCrossSpawn('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(passPathToCrossSpawn('unicorns'), 'unicorns & wrong');
});
