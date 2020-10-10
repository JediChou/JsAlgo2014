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

    describe('2.9-练习2', function(){

        // 2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。

        it('2.9.2-solution', function(done){
            var msg = "h1 h2 h3";
            var msg_arr1 = msg.split(' ');
            assert.strictEqual(msg_arr1.length, 3);
            assert.strictEqual(msg_arr1[0], "h1");
            assert.strictEqual(msg_arr1[1], "h2");
            assert.strictEqual(msg_arr1[2], "h3");
            assert.strictEqual(msg_arr1.join(','), "h1,h2,h3");
            assert.strictEqual(msg_arr1.reverse().join(','), "h3,h2,h1");
            done();
        });

    });

});