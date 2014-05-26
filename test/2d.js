var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');
var lu = require('../');

test('2d', function (t) {
    var L = zeros([ 2, 2 ]);
    var U = zeros([ 2, 2 ]);
    var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
    
    lu(A, L, U);
    t.deepEqual(toA(U.data), [ 1, 0, 1.5, 1 ], 'U');
    t.deepEqual(toA(L.data), [ 4, 3, 0, -1.5 ], 'L');
    t.end();
});

function toA (x) {
    return [].slice.call(x);
}
