var assert = require('assert');

describe('2.2.1　创建数组', function(){

    it('创建数组', function(done){
        assert.ok([] instanceof Array);
        assert.ok([1] instanceof Array);
        assert.ok(['a'] instanceof Array);
        assert.ok([{}] instanceof Array);
        done();
    });

    it('数组长度', function(done){
        assert.strictEqual([].length, 0);
        assert.strictEqual([1,2,3].length, 3);
        done();
    });

    it('调用构造函数创建数组1', function(done){
        var arr = new Array();
        assert.strictEqual(arr.length, 0);
        done();
    });

    it('调用构造函数创建数组2', function(done){
        var arr = new Array(1,2,3);
        assert.strictEqual(arr.length, 3);
        assert.strict(arr[0], 1);
        assert.strict(arr[1], 2);
        assert.strict(arr[2], 3);
        done();
    });

    it('调用构造函数创建数组3', function(done){
        var arr = new Array(10);
        assert.strictEqual(arr.length, 10);
        done();
    });

    it('数组可以容纳不同类型元素', function(done){
        var arr = [1, null, {}, []];
        assert.strictEqual(arr.length, 4);
        assert.strictEqual(arr[0], 1);
        assert.strictEqual(arr[1], null);
        assert.ok(arr[2] instanceof Object);
        assert.ok(arr[3] instanceof Array);
        done();
    });

    it('判断变量是否为数组', function(done){
        var arr = [1,2];
        assert.ok(Array.isArray(arr));
        done();
    });
});