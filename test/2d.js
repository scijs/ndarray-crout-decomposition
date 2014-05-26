var test = require('tape');
var ndarray = require('ndarray');
var lu = require('../');

test('2d', function (t) {
    var dL = Array(4);
    var dU = Array(4);
    var L = ndarray(dL, [ 2, 2 ]);
    var U = ndarray(dU, [ 2, 2 ]);
    var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
    
    lu(L, U, A);
    t.deepEqual(dL, [ 1, 0, 1.5, 1 ], 'L');
    t.deepEqual(dU, [ 4, 3, 0, -1.5 ], 'U');
    t.end();
});
