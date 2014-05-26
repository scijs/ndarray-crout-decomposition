module.exports = function (A, L, U) {
    var m = A.shape[0];
    var n = A.shape[1];
    if (m !== n) return undefined; // non-square
    
    // diagonalize U
    for (var i = 0; i < n; i++) {
        U.set(i, i, 1);
    }
    
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            var sum = 0;
            for (var k = 0; k < i; k++) {
                sum += L.get(k,j) * U.get(i,k);
            }
            L.set(j, i, A.get(j, i) - sum);
        }
        for (var j = i; j < n; j++) {
            var sum = 0;
            for (var k = 0; k < i; k++) {
                sum += L.get(k,i) * U.get(j,k);
            }
            var denom = L.get(i,i);
            if (denom === 0) return undefined;
            U.set(j, i, (A.get(j,i) - sum) / denom);
        }
    }
};
