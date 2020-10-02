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

    
});
