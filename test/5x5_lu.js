var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');
var lu = require('../');
var toA = require('./lib/toa.js');
var round = require('./lib/round.js');

// example problem data from
// http://mathfaculty.fullerton.edu/mathews/n2003/cholesky/CholeskyMod/Links/CholeskyMod_lnk_3.html

var A = ndarray([
    2, 1, 1, 3, 2,
    1, 2, 2, 1, 1,
    1, 2, 9, 1, 5,
    3, 1, 1, 7, 1,
    2, 1, 5, 1, 8
], [ 5, 5 ]);
var LU = zeros([ 5, 5 ]);

var expected = [
    [ 2, 1/2, 1/2, 3/2, 1 ],
    [ 1, 3/2, 1, -1/3, 0 ],
    [ 1, 3/2, 7, 0, 4/7 ],
    [ 3, -1/2, 0, 7/3, -6/7 ],
    [ 2, 0, 4, -2, 2 ]
];

test('5x5', function (t) {
    t.ok(lu(A, LU));
    t.deepEqual(
        round(toA(LU), 13),
        round(expected, 13)
    );
    t.end();
});
