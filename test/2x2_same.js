var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');
var lu = require('../');
var toA = require('./lib/toa.js');

test('2x2 same L and U', function (t) {
    var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
    var LU = zeros([ 2, 2 ]);
    
    t.ok(lu(A, LU, LU));
    t.deepEqual(toA(LU), [ [ 4, 1.5 ], [ 3, -1.5 ] ]);
    
    t.end();
});
