# pass-path-to-cross-spawn

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module

| script |appveyor(node v0.12)|travis-ci(node v0.10)|travis-ci(node v0.12)|travis-ci(iojs)|
|:-----------|:-----------:|:------------:|:-----------:|:------------:|
| shebang:node | o | o | o | o |
| shebang:only | x | o | o | o |
| native:notadded:node | o | x(>= v0.12)| o | o |
| native:notadded:only |  | x(>= v0.12)| o | o |


* shebang:node
    * `node fixtures/bin/example.js`
* shebang:only
    * `fixtures/bin/example.js`
* native:notadded:node
    * native SpawnSync, PATH=PATH `spawnSync('node', [path.join('fixtures', 'bin', 'example.js'), {stdio: 'inherit'}])`
* native:notadded:only
    * native SpawnSync, PATH=PATH `spawnSync(path.join('fixtures', 'bin', 'example.js'), [], {stdio: 'inherit'}])`

[travis-url]: https://travis-ci.org/sanemat/pass-path-to-cross-spawn
[travis-image]: https://img.shields.io/travis/sanemat/pass-path-to-cross-spawn/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/pass-path-to-cross-spawn/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/pass-path-to-cross-spawn/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/pass-path-to-cross-spawn
[npm-image]: https://img.shields.io/npm/v/pass-path-to-cross-spawn.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/pass-path-to-cross-spawn
[daviddm-image]: https://img.shields.io/david/sanemat/pass-path-to-cross-spawn.svg?style=flat-square
