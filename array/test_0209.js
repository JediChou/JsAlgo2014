// file: test_0209.js
// description: 2.9 练习

var assert = require('assert');

describe('2.9 练习', function(){

    describe('2.9-练习1', function(){

        // 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，
        // 以及一个显示学生平均成绩的方法。

        function Student(name) {
            this.name = name;
            this.gradues = [];
            this.average = function() {
                var total = 0;
                for (var idx=0; idx<this.gradues.length; idx++)
                    total += this.gradues[idx];
                return total/this.gradues.length;
            };
        }

        it('2.9.1-solution', function(done) {
            var stu = new Student("jedi");
            stu.gradues.push(20);
            stu.gradues.push(100);
            assert.strictEqual(stu.average(), 60);
            done();
        });

    });

});