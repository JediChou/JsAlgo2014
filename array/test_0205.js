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

        it('reduceRight-示例', function(done){
            function action(msg, word) {
                return msg + " " + word;
            }
            var message = "hello world and you";
            var words_reverse = message.split(' ').reverse();
            assert.strictEqual(words_reverse.reduceRight(action), message);
            done();
        });
    });

    describe('2.5.2　生成新数组的迭代器方法', function(){

        it('map()-示例', function(done){
            function timeFiles(year) {
                return year + 5;
            }
            var before = [42, 37, 7];
            var current = [47, 42, 12];
            var actual = before.map(timeFiles);
            assert.deepStrictEqual(actual, current);
            done();
        });

        it('map()-示例2', function(done){
            function typeChecker(elt) {
                return elt instanceof Object;
            }
            var arr = [1, {}, []];
            assert.deepStrictEqual(arr.map(typeChecker), [false, true, true]);
            done();
        });

        it('map()-配合join的实例-获取单词首字母', function(done){
            function getFirstCharacter(elt) {
                return (typeof elt == 'string') ? elt[0].toUpperCase() : '';
            }
            var characters = ['hello', 'world'].map(getFirstCharacter);
            var message = characters.join("");
            assert.deepStrictEqual(characters, ['H', 'W']);
            assert.deepStrictEqual(message, 'HW');
            done();
        });

        it('filter()-示例-过滤奇偶数', function(done){
            function isEven(num) { return num % 2 == 0; }
            function isOdd(num) { return num % 2 == 1; }
            var arr = [1,2,3,4,5,6,7,8,9,10];
            var evenNums = arr.filter(isEven);
            var oddNums = arr.filter(isOdd);
            assert.deepStrictEqual(oddNums, [1,3,5,7,9]);
            assert.deepStrictEqual(evenNums, [2,4,6,8,10]);
            done();
        });

        it('filter()-示例-过滤大于60的数', function(done){
            function big(num) { return num > 60; }
            function small(num) { return num <= 60;}
            var arr = [1,2,3,40,60,70,80,100];
            var bigs = arr.filter(big);
            var smalls = arr.filter(small);
            assert.deepStrictEqual(bigs, [70,80,100]);
            assert.deepStrictEqual(smalls, [1,2,3,40,60]);
            done();
        });

    });

});