var spawnSync = require('child_process').spawnSync;
var path = require('path');

var result;
var opts = {
  stdio: 'inherit'
};
var command = [path.join('fixtures', 'bin', 'example.js'), [], opts];
try {
  result = spawnSync.apply(null, command);
  console.log('error: ' + result.error);
  console.log('status: ' + result.status);
} catch (e) {
  console.error(e);
  process.exit(1);
}
