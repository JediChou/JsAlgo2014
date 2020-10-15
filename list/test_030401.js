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

    });

});