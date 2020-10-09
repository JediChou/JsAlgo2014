var assert = require('assert');

describe('2.7 对象数组', function(){

    function Point(x, y) {
        this.x = x;
        this.y = y; 
    }

    it('对象数组-示例1', function(done){
        var p1 = new Point(1, 5);
        var p2 = new Point(2, 4);
        var p3 = new Point(3, 3);
        var arr = [p1, p2, p3];
        for (var idx = 0; idx < arr.length; idx++) {
            assert.strictEqual(arr[idx].x + arr[idx].y, 6);
        }
        done();
    });

    it('对象数组-示例2', function(done){
        function xpy(point) { return (point.x + point.y) == 6; }
        var p1 = new Point(1, 5);
        var p2 = new Point(2, 4);
        var p3 = new Point(3, 3);
        var arr = [p1, p2, p3];
        assert.ok(arr.every(xpy));
        done();
    });

});