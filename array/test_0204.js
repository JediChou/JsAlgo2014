// 2.4　可变函数

var assert = require('assert');

describe('2.4 可变函数', function(){

    describe('2.4.1 为数组添加元素', function(){

        it('push()-示例01', function(done){
            var arr = [1,2,3,4,5];
            arr.push(6);
            assert.strictEqual(arr.length, 6);
            assert.strictEqual(arr[arr.length-1], 6);
            done();
        });

        it('数组元素向后移动', function(done){
            var arr = [2,3];
            var newnum = 1;
            var N = arr.length;
            for (var i=N; i>=0; i--) {
                arr[i] = arr[i-1];
            }
            assert.strictEqual(arr[0], undefined);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);

            arr[0] = newnum;
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            done();
        });

        it('unshif()-示例', function(done){
            var arr = [2,3];
            arr.unshift(1);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            assert.strictEqual(arr.length, 3);
            done();
        });

    });

    describe('2.4.2　从数组中删除元素', function(){

        it('pop()-删除元素的末尾元素-示例', function(done){
            var arr = [1,2,9];
            var val = arr.pop();
            assert.strictEqual(val, 9);
            assert.strictEqual(arr.length, 2);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            done();
        });

        it('shift()-手动版本', function(done){
            var arr = [9,1,2,3];
            for (var i=0; i<arr.length; i++) {
                arr[i] = arr[i+1];
            }
            assert.strictEqual(arr.length, 4);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            // Jedi: 最后一个元素变成了undefined
            // Jedi: 而且array.length是没有变化的
            assert.strictEqual(arr[3], undefined);
            done();
        });

        it('shift()-删除数组的第一个元素-示例', function(done){
            var arr = [9,1,2,3];
            var lenB_Before_Operation = arr.length;
            var fisrt_elt = arr[0];
            var val = arr.shift();
            assert.strictEqual(val, fisrt_elt);
            // Jedi: 而且array.length是有变化的
            // Jedi: 所以使用shift使得JS的Array更像一个ADT类型
            assert.strictEqual(arr.length, lenB_Before_Operation-1);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            done();
        });

        it('第一个元素放到数组末尾', function(done){
            var arr = [3,1,2];
            arr.push(arr.shift());
            assert.strictEqual(arr.length, 3);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            done();
        });

    });

    describe('2.4.3　从数组中间位置添加和删除元素', function(){

        it('splice-示例1', function(done){
            var arr1 = [1,2,5];
            var arr2 = [3, 4];

            ////////////////////////////////
            // Jedi: 修订书中的错误
            arr2.reverse();
            for (var i=0; i<arr2.length; i++)
                arr1.splice(2, 0, arr2[i]);
            ////////////////////////////////

            assert.strictEqual(arr1.length, 5);
            assert.deepStrictEqual(arr1, [1,2,3,4,5]);
            done();
        });

        it('splice-示例2', function(done){
            var arr = [1,2,4,5];
            arr.splice(2, 0, 3);
            assert.strictEqual(arr.length, 5);
            assert.deepStrictEqual(arr, [1,2,3,4,5]);
            done();
        });

        it('splice-示例3-多个元素插入', function(done){
            var arr = [1,2,5,6];
            arr.splice(2, 0, 3, 4);
            assert.strictEqual(arr.length, 6);
            assert.deepStrictEqual(arr, [1,2,3,4,5,6]);
            done();
        });

        it('splice-示例4-元素不必同类型', function(done){
            var arr = [1,2,5,6];
            arr.splice(2, 0, 3, {});
            assert.strictEqual(arr.length, 6);
            assert.deepStrictEqual(arr, [1,2,3,{},5,6]);
            done();
        });

        it('splice-示例5-删除数组元素', function(done){
            var arr = [1,2,3,100,200,300,400,4,5];
            arr.splice(3,4);
            assert.strictEqual(arr.length, 5);
            assert.deepStrictEqual(arr, [1,2,3,4,5]);
            done();
        });

        it('splice-模拟push()', function(done){
            var arr = [1,2,3];
            var insert_val = 4;
            arr.splice(arr.length, 0, insert_val);
            assert.strictEqual(arr.length, 4);
            assert.deepStrictEqual(arr, [1,2,3,4]);
            done();
        });

        it('splice-模拟pop()', function(done){
            var arr = [1,2,3];
            arr.splice(arr.length-1, 1);
            assert.strictEqual(arr.length, 2);
            assert.deepStrictEqual(arr, [1,2]);
            done();
        });

        it('splice-模拟unshift', function(done){
            var arr = [2,3], val = 1;
            arr.splice(0,0,val);
            assert.strictEqual(arr.length, 3);
            assert.deepStrictEqual(arr, [1,2,3]);
            done();
        });

        it('splice-模拟shift', function(done){
            var arr = [1,2,3];
            arr.splice(0, 1);
            assert.strictEqual(arr.length, 2);
            assert.deepStrictEqual(arr, [2,3]);
            done();
        });

    });

    describe('2.4.4　为数组排序', function(){

        it('reverse示例', function(done){
            assert.deepStrictEqual([1,2].reverse(), [2,1]);
            assert.deepStrictEqual(['a','b'].reverse(), ['b','a']);
            assert.deepStrictEqual(['a',{}].reverse(), [{},'a']);
            done();
        });

        it('string数组排序', function(done){
            var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
            var tgt = ["Bryan","Clayton","Cynthia","David","Mike","Raymond"];
            names.sort();
            assert.deepStrictEqual(names, tgt);
            done();
        });

        it('整数数组的缺省排序', function(done){
            // Jedi: 缺省按照字典顺序对元素进行排序
            var nums = [3,1,2,100,4,200];
            var tgt = [1,100,2,200,3,4];
            nums.sort();
            assert.deepStrictEqual(nums, tgt);
            done();
        });

    });    

});