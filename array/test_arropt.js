var assert = require('assert');

describe('2.2.2　读写数组', function(){

    it('数组赋值', function(done){
        var arr = [];
        for (var i=0; i<5; ++i)
            arr[i] = i;
        assert.strictEqual(arr.length, 5);
        done();
    });

    it('读取数组元素', function(done){
        var arr = [1,2,3];
        assert.strictEqual(arr[0], 1);
        assert.strictEqual(arr[1], 2);
        assert.strictEqual(arr[2], 3);
        done();
    });

    it('数组元素变更', function(done){
        var arr = [];
        arr[0] = 23;
        assert.strictEqual(arr[0], 23);
        done();
    });

    it('数组元素迭代1', function(done){
        var arr=[1,2];
        var sum = 0;
        for (var i=0; i<arr.length;i++)
            sum += arr[i];
        assert.strictEqual(sum, 3);
        done();
    }); 

    it('数组元素迭代2', function(done){
        var arr = [1, 2];
        var sum = 0;
        arr.forEach(function(val){
            sum += val;
        });
        assert.strictEqual(sum, 3);
        done();
    });

});