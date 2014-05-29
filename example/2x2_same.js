var ndarray = require('ndarray');
var zeros = require('zeros');
var show = require('ndarray-show');
var crout = require('../');

var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
var LU = zeros([ 2, 2 ]);

crout(A, LU);
console.log('LU=\n' + show(LU));
