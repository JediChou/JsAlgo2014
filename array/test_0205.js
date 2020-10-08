var assert = require('assert');

describe('2.5　迭代器方法', function(){

    describe('2.5.1　不生成新数组的迭代器方法', function(){

        it('forEach()-示例', function(done){
            var arr = [1,2,3];
            var tgt = [];
            function square(num) {
                tgt.push(num * num);
            }
            arr.forEach(square);
            assert.strictEqual(tgt.length, arr.length);
            assert.deepStrictEqual(tgt, [1,4,9]);
            done();
        });

        it('every()-示例', function(done){
            function isEven(num) {return num % 2 == 0;}
            assert.ok([2,4,6,8,10].every(isEven));
            done();
        });

    });

});