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

    });

});