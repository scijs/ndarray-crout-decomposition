var test = require('tape');
var ndarray = require('ndarray');
var lu = require('../');

test('2d', function (t) {
    var L = Array(4);
    var U = Array(4);
    var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
    
    lu(L, U, A);
    t.deepEqual(L, [ 1, 0, 1.5, 1 ], 'L');
    t.deepEqual(U, [ 4, 3, 0, -1.5 ], 'U');
    t.end();
});
