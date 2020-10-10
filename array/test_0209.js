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

    describe('2.9-练习3', function(){

        // 3. 修改本章前面出现过的weeklyTemps 对象，使它可以使用一个二维数组
        // 来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数
        // 和所有周的平均数。

        function weekTemps() {
            this.dataStore = [];
        }

        weekTemps.prototype.add = function (month, temp) {
            if (!(this.dataStore[month - 1] instanceof Array))
                this.dataStore[month - 1] = [];
            this.dataStore[month - 1].push(temp);
        };

        weekTemps.prototype.avgmonth = function (month) {
            var total = 0;
            if (month < 1) return total;
            if (!(this.dataStore[month-1] instanceof Array)) return total;
            for (var idx = 0; idx < this.dataStore[month-1].length; idx++)
                total += this.dataStore[month-1][idx];
            return total / this.dataStore[month-1].length;
        };
        
        it('2.9.2-weeklyTemp的测试-初始化', function(done){
            var weeks = new weekTemps();
            assert.strictEqual(weeks.dataStore.length, 0);
            done();
        });

        it('2.9.2-weeklyTemp的测试-add-单个月份', function(done){
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            assert.strictEqual(weeks.dataStore.length, 1);
            assert.strictEqual(weeks.dataStore[0][0], 20);
            assert.strictEqual(weeks.dataStore[0][1], 30);
            done();
        });

        it('2.9.2-weeklyTemp的测试-add-多个月份', function(done){
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            weeks.add(3, 40);
            weeks.add(3, 50);
            assert.strictEqual(weeks.dataStore.length, 3);
            assert.strictEqual(weeks.dataStore[2][0], 40);
            assert.strictEqual(weeks.dataStore[2][1], 50);
            done();
        });

        it('2.9.2-weeklyTemp的测试-avgmonth-月份记录为空', function(done){
            var weeks = new weekTemps();
            assert.strictEqual(weeks.avgmonth(3), 0);
            done();
        });

    });

});