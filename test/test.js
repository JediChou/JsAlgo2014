var assert = require('assert');
var calc = require('../calc.js');

describe('calculator tests', function(){

    describe('addtion tests', function() {
        it('return 1 + 1 = 2', function(done){
            assert.strictEqual(calc.add(1,1), 2);
            done();
        });

        it('return 1 + 2 = 3', function(done){
            assert.strictEqual(calc.add(1,2), 3);
            done();
        });

        it('return 1 + -1 = 0', function(done){
            assert.strictEqual(calc.add(1, -1), 0);
            done();
        });
    });

    describe('Multiplication Tests', function() {
        it('returns 2 * 2 = 4', function(done) {
            assert.strictEqual(calc.mul(2, 2), 4);
            done();
        });

        it('returns 0 * 4 = 4', function(done) {
            assert.strictEqual(calc.mul(2, 2), 4);
            done();
        });
    });

});
