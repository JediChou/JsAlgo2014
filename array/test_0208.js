var assert = require('assert');

describe('2.8 对象中的数组', function(){

    function PersonGradue(name, age) {
        this.gradues = [];
        this.name = name;
        this.age = age;
    }

    it('对象中的数组-示例', function(done){
        var gradue = new PersonGradue('jedi', 42);
        var check99 = function(num) { return num == 99;};
        gradue.gradues.push(99);
        gradue.gradues.push(99);
        gradue.gradues.push(99);
        assert.strictEqual(gradue.gradues.length, 3);
        assert.ok(gradue.gradues.every(check99));
        done();
    });

});