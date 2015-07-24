var spawnSync = require('child_process').spawnSync;
var path = require('path');

var result;
var opts = {
  stdio: 'inherit'
};
var command = ['node', [path.join('fixtures', 'bin', 'example.js')], opts];

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
