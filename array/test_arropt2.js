// 2.2.4 对数组的整体性操作
var assert = require('assert');

describe('2.2.4 对数组的整体性操作', function(){

    it('数组赋值给另一个数组', function(done){
        var nums1 = [1,2,3];
        var nums2 = nums1;
        for (var i=0; i<nums1.length; i++)
            assert.strictEqual(nums1[i], nums2[i]);
        done();
    });

    it('数组的浅拷贝', function(done){
        var nums1 = [1,2,3];
        var nums2 = nums1;
        nums2[0] = 400;
        assert.strictEqual(nums1[0], 400);
        assert.strictEqual(nums2[0], 400);
        done();
    });

    it('数组的深拷贝', function(done){
        var nums1 = [1,2,3];
        var nums2 = [];
        for (var i=0; i<nums1.length; i++)
            nums2[i] = nums1[i];
        nums2[0] = 400;
        assert.strictEqual(nums1[0],  1);
        assert.strictEqual(nums2[0], 400);
        done();
    });

});
