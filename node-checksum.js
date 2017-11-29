var fs = require('fs-extra');
var uuid = require('uuid');

var v = uuid.v1();

var output = [
    'var CHECKSUM = {',
    '    build: \'' + v + '\'',
    '};',
    'module.exports = CHECKSUM;'
];

fs.writeFile('./src/checksum.js', output.join('\n'), { encoding: 'utf8', flag: 'w' }, function (error) {

    if (error) {
        throw error;
    }  else {
        console.log('Building #' + v);
    }

});
