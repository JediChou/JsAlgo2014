var assert = require('assert');

describe('2.6　二维和多维数组', function(){

    describe('2.6.1　创建二维数组', function(){

        it('n行1列的二维数组了', function(done){
            var n1_matrix = [], rows = 5;
            for (var i=0; i < rows; i++)
                n1_matrix[i] = [];
            assert.strictEqual(n1_matrix.length, 5);
            assert.deepStrictEqual(n1_matrix, [[],[],[],[],[]]);
            done();
        });

    });

});