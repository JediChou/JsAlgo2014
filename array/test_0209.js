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

        // solution
        function weekTemps() {
            this.dataStore = [];
            
            this.add = function (month, temp) {
                if (!(this.dataStore[month - 1] instanceof Array))
                    this.dataStore[month - 1] = [];
                this.dataStore[month - 1].push(temp);
            };

            this.avgmonth = function (month) {
                var total = 0;
                if (month < 1) return total;
                if (!(this.dataStore[month-1] instanceof Array)) return total;
                for (var idx = 0; idx < this.dataStore[month-1].length; idx++)
                    total += this.dataStore[month-1][idx];
                return total / this.dataStore[month-1].length;
            };

            this.total = function() {
                var total = 0;
                for (var idx = 0; idx <this.dataStore.length; idx++) {
                    var monthds = this.dataStore[idx];
                    if (monthds instanceof Array) {
                        for (var m_idx = 0; m_idx < monthds.length; m_idx++) {
                            total += monthds[m_idx];
                        }
                    }
                }
                return total;
            };
        }
        
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

        it('2.9.2-weeklyTemp的测试-avgmonth-月份记录为空1', function(done){
            var weeks = new weekTemps();
            assert.strictEqual(weeks.avgmonth(3), 0);
            done();
        });

        it('2.9.2-weeklyTemp的测试-avgmonth-月份记录为空2', function(done){
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            weeks.add(3, 40);
            weeks.add(3, 50);
            assert.strictEqual(weeks.dataStore.length, 3);
            assert.strictEqual(weeks.avgmonth(2), 0);
            done();
        });

        it('2.9.2-weeklyTemp的测试-avgmonth-月份记录为正常', function(done){
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            weeks.add(3, 40);
            weeks.add(3, 50);
            assert.strictEqual(weeks.avgmonth(1), 25);
            assert.strictEqual(weeks.avgmonth(3), 45);
            done();
        });

        it('2.9.2-weeklyTemp的测试-total-无任何记录', function(done){ 
            var weeks = new weekTemps();
            assert.strictEqual(weeks.total(), 0);
            done(); 
        });

        it('2.9.2-weeklyTemp的测试-total-全部月份有记录', function(done){ 
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            weeks.add(2, 40);
            weeks.add(2, 50);
            weeks.add(3, 60);
            weeks.add(3, 70);
            assert.strictEqual(weeks.total(), 270);
            done(); 
        });

        it('2.9.2-weeklyTemp的测试-total-部分月份有记录', function(done){ 
            var weeks = new weekTemps();
            weeks.add(1, 20);
            weeks.add(1, 30);
            weeks.add(3, 60);
            weeks.add(3, 70);
            assert.strictEqual(weeks.total(), 180);
            done(); 
        });

    });

    describe('2.9练习-4', function(){

        // 4. 创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一
        // 起，显示成一个单词。

        // solution
        function CodingTable() {
            this.codes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            this.decode = function(ctLst) {
                if (!(ctLst instanceof Array))
                    return undefined;
                var r = [];
                for (var i = 0; i < ctLst.length; i++)
                    r.push(this.codes[ctLst[i]]);
                return r.join('');
            };
            this.encode = function(str) {
                if(typeof(str) != "string")
                    return undefined;
                var encrypt_arr = [];
                for (var i = 0; i < str.length; i++)
                    encrypt_arr.push(this.codes.indexOf(str[i]));
                return encrypt_arr;
            };
        }

        it('2.9.4-decode测试', function(done){
            var ct = new CodingTable();
            var encrypt_arr = [1,4,4];
            assert.strictEqual(ct.decode(encrypt_arr), "bee");
            done();
        });

        it('2.9.4-encode测试', function(done){
            var ct = new CodingTable();
            assert.deepStrictEqual(ct.encode("abc"), [0,1,2]);
            assert.deepStrictEqual(ct.encode("bee"), [1,4,4]);
            done();
        });

        it('2.9.4-decode和encode的测试', function(done){
            var ct = new CodingTable();
            var msg = "jedichou";
            var encodes_arr = ct.encode(msg);
            var decode_msg = ct.decode(encodes_arr);
            assert.strictEqual(msg, decode_msg);
            done();
        });

    });

});