# pass-path-to-cross-spawn

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module

| script |appveyor(node v0.12)|travis-ci(node v0.10)|travis-ci(node v0.12)|travis-ci(iojs)|
|:-----------|:-----------:|:------------:|:-----------:|:------------:|
| shebang_node          | o | o | o | o |
| shebang_only          | x | o | o | o |
| native_notadded_node  | o | x(>= v0.12)| o | o |
| native_notadded_only  | x | x(>= v0.12)| o | o |
| polyfill_notadded_node| o | o | o | o |
| polyfill_notadded_only|||||

* shebang_node
    * `node fixtures/bin/example.js`
* shebang_only
    * `fixtures/bin/example.js`
* native_notadded_node
    * native SpawnSync, PATH=PATH `spawnSync('node', [path.join('fixtures', 'bin', 'example.js'), {stdio: 'inherit'}])`
* native_notadded_only
    * native SpawnSync, PATH=PATH `spawnSync(path.join('fixtures', 'bin', 'example.js'), [], {stdio: 'inherit'}])`
* polyfill_notadded_node
    * spawn-sync, PATH=PATH `spawnSync('node', [path.join('fixtures', 'bin', 'example.js'), {stdio: 'inherit'}])`
* polyfill_notadded_only
    * spawn-sync, PATH=PATH `spawnSync(path.join('fixtures', 'bin', 'example.js'), [], {stdio: 'inherit'}])`

[travis-url]: https://travis-ci.org/sanemat/pass-path-to-cross-spawn
[travis-image]: https://img.shields.io/travis/sanemat/pass-path-to-cross-spawn/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/pass-path-to-cross-spawn/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/pass-path-to-cross-spawn/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/pass-path-to-cross-spawn
[npm-image]: https://img.shields.io/npm/v/pass-path-to-cross-spawn.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/pass-path-to-cross-spawn
[daviddm-image]: https://img.shields.io/david/sanemat/pass-path-to-cross-spawn.svg?style=flat-square
