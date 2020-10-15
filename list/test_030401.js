// file: test_030401.js
// description: filmsapp读取文本文件的测试

var assert = require('assert');
var collection = require('./list.js');
var film = require('./filmsapp.js');

describe('3.4.1 读取文本文件', function(){

    describe('测试Model(Customer)', function(){

        it('测试Model(Customer)-初始化', function(done){
            var customer = new film.Customer("jedi", "精武门");
            assert.strictEqual(customer.name, "jedi");
            assert.strictEqual(customer.movie, "精武门");
            done();
        });

        it('测试Model(Customer)-列表append测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.dataStore[0], c1);
            assert.strictEqual(list.dataStore[1], c2);
            assert.strictEqual(list.dataStore[2], c3);
            done();
        });

        it('测试Model(Customer)-列表find测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.find(c1), 0);
            assert.strictEqual(list.find(c2), 1);
            assert.strictEqual(list.find(c3), 2);
            done();
        });

        it('测试Model(Customer)-列表remove测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            list.remove(c2);
            assert.strictEqual(list.length(), 2);
            assert.strictEqual(list.find(c1), 0);
            assert.strictEqual(list.find(c3), 1);
            done();
        });

        it('测试Model(Customer)-列表length测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            assert.strictEqual(list.length(), 3);
            done();
        });

        it('测试Model(Customer)-列表toString测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            assert.strictEqual(
                list.toString().join(''), 
                "[object Object][object Object][object Object]"
            );
            done();
        });

        it('测试Model(Customer)-列表insert测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c3);
            list.insert(c2, c1);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.dataStore[0], c1);
            assert.strictEqual(list.dataStore[1], c2);
            assert.strictEqual(list.dataStore[2], c3);
            done();
        });

        it('测试Model(Customer)-列表clear测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            list.clear();
            assert.strictEqual(list.length(), 0);
            assert.deepStrictEqual(list.dataStore, []);
            done();
        });

        it('测试Model(Customer)-列表contains测试', function(done){
            var list = new collection.List();
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            list.append(c1);
            list.append(c2);
            list.append(c3);
            assert.strictEqual(list.length(), 3);
            assert.ok(list.contains(c1));
            assert.ok(list.contains(c2));
            assert.ok(list.contains(c3));
            list.remove(c1);
            assert.ok(!list.contains(c1));
            done();
        });

        it('测试Model(Customer)-列表迭代(从左向右)', function(done){
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            var list = new collection.List();
            var arr = [c1,c2,c3];
            list.append(c1);
            list.append(c2);
            list.append(c3);
            for(list.front(); list.currPos() < list.length(); list.next()) {
                assert.deepStrictEqual(list.getElement(), arr[list.currPos()]);
            }
            done();
        });

        it('测试Model(Customer)-列表迭代(从右向左)', function(done){
            var c1 = new film.Customer('jedi', 'movie1');
            var c2 = new film.Customer('becky', 'movie2');
            var c3 = new film.Customer('cici', 'movie3');
            var list = new collection.List();
            var arr = [c1,c2,c3];
            list.append(c1);
            list.append(c2);
            list.append(c3);
            for (list.end(); list.currPos() >= 0; list.prev()) {
                assert.strictEqual(list.getElement(), arr[list.currPos()]);
            }
            done();
        });

    });

});