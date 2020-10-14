// file: test_030300.js
// description: 遍历List

var assert = require('assert');
var collection = require('./list');

describe('3.3 使用迭代器访问列表', function(){

    it('从左向右边迭代', function(done){
        var list = new collection.List();
        var datas = [0,1,2,3,4,5];
        for (var i=0; i<datas.length; i++) {
            list.append(datas[i]);
        }
        for(list.front(); list.currPos() < list.length(); list.next()) {
            assert.strictEqual(list.getElement(), datas[list.currPos()]);
        }
        done();
    });

    it('从右向左迭代', function(done){
        var list = new collection.List();
        var datas = [0,1,2,3,4,5];
        for (var i=0; i<datas.length; i++) {
            list.append(datas[i]);
        } 
        for (list.end(); list.currPos() >= 0; list.prev()) {
            assert.strictEqual(list.getElement(), datas[list.currPos()]);
        }
        done();
    });

});