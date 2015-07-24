#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var passPathToCrossSpawn = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ pass-path-to-cross-spawn [input]',
    '',
    'Examples',
    '  $ pass-path-to-cross-spawn',
    '  unicorns & rainbows',
    '',
    '  $ pass-path-to-cross-spawn ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(passPathToCrossSpawn(cli.input[0] || 'unicorns'));
