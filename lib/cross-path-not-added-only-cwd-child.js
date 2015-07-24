var spawnSync = require('cross-spawn').sync;
var path = require('path');

var result;
var cwd = process.cwd();
var opts = {
  stdio: 'inherit',
  cwd: path.join(cwd, 'temp')
};
var command = [path.join(cwd, 'fixtures', 'bin', 'example.js'), [], opts];

try {
  result = spawnSync.apply(null, command);
} catch (e) {
  console.error(e);
  process.exit(1);
}
console.log('error: ' + result.error);
console.log('status: ' + result.status);
if (result.error) {
  console.error(result.error);
  process.exit(result.status || 1);
} else if (result.status !== 0) {
  console.error(result.status);
  process.exit(result.status || 11);
}
