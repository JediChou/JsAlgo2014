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

        it('some()-示例', function(done){
            function isOdd(num) { return num % 2 == 1;}
            assert.ok([1,2,3,4,5].some(isOdd));
            assert.ok([1,3,5].some(isOdd));
            assert.ok(![2,4,8].some(isOdd));
            done();
        });

        it('reduce()-示例1', function(done){
            function action(total, elt) {
                return total + elt;
            }
            var sum = [1,2,3].reduce(action);
            assert.strictEqual(sum , 6);
            done();
        });

        it('reduce()-示例2', function(done){
            function action(msg, word) {
                return msg + " " + word;
            }
            var msg = ["hello", "world"].reduce(action);
            assert.strictEqual(msg , "hello world");
            done();
        });
    });

});