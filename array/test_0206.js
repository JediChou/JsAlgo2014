var assert = require('assert');

describe('2.6　二维和多维数组', function(){

    describe('2.6.1　创建二维数组', function(){

        it('n行1列的二维数组', function(done){
            var n1_matrix = [], rows = 5;
            for (var i=0; i < rows; i++)
                n1_matrix[i] = [];
            assert.strictEqual(n1_matrix.length, 5);
            assert.deepStrictEqual(n1_matrix, [[],[],[],[],[]]);
            done();
        });

        it('m*n的二维数组(可以当成矩阵或行列式用)', function(done){

            // 初始化m行n列，初始值为initial的二维数组
            var matrix = function(rows, cols, initial) {
                var arr = [];
                for (var row = 0;row < rows; row++) {
                    var column = [];
                    for (var col = 0;col < cols; col++)
                        column[col] = initial;
                    arr[row] = column;
                }
                return arr;
            };

            var mx = matrix(2,2,0);
            assert.strictEqual(mx.length, 2);
            done();
        });

    });

    describe('2.6.2　处理二维数组的元素', function(){

        it('内外循环的示例', function(done){
            var grades = [[77, 77, 77],[88, 88, 88],[99, 99, 99]];
            var total = 0, average = 0;
            for (var row = 0; row < grades.length; row++)
                for (var col = 0; col < grades[row].length; col++)
                    total += grades[row][col];
            average = total / grades.length;
            assert.strictEqual(total, 792);
            assert.strictEqual(average, 264);
            done();
        });

        it('内外循环的示例-冗余的写法', function(done){
            // Jedi: 逻辑更清晰
            var grades = [
                [77, 77, 77],
                [88, 88, 88],
                [99, 99, 99]
            ];
            var total = 0;
            for (var row = 0; row < grades.length; row++) {
                var cols = grades[row];
                for (var col = 0; col < cols.length; col++) {
                    total += cols[col];
                }
            }
            var average = total / grades.length;
            assert.strictEqual(total, 792);
            assert.strictEqual(average, 264);
            done();
        });

    });

    describe('2.6.3　参差不齐的数组', function(){

        it('锯齿数组-示例', function(done){
            var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
            done();
        });

    });
});