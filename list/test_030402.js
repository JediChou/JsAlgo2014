// file: test_030402.js
// description: filmsapp的影片管理测试

var assert = require('assert');
var collection = require('./list.js');
var fs = require('fs');

describe('3.4.2 使用列表管理影碟租赁', function(){
    
    var movies_file = './list/films.txt';

    function createArr(file) {
        var contents = fs.readFileSync(movies_file, 'utf8'), arr = [];
        if (contents) arr = contents.split("\n");
        for (var i = 0; i < arr.length; ++i)
            arr[i] = arr[i].trim();
        return arr;
    }

    it('影片库显示', function(done){
        var mvlist = new collection.List();
        var mvarr = createArr();
        mvarr.forEach(function (elt) { mvlist.append(elt); });
        assert.strictEqual(mvlist.getElement(), 'The Shawshank Redemption');
        assert.strictEqual(mvlist.length(), 21);
        done();

        // 循环显示 
        // for(mvlist.front(); mvlist.currPos() < mvlist.length(); mvlist.next())
        //     console.log(mvlist.getElement());
    });


    // customer
    function Customer (name, movie) {
        this.name = name;
        this.movie = movie;
    }

    // function: checkout
    function checkout(name, movie, filmList, customerList) {
        if (filmList.contains(movie)) {
            var c = new Customer(name, movie);
            customerList.append(c);
            filmList.remove(movie);
        }
        return -1;
    }

    it('影片Checkout', function(done){
        var mvlist = new collection.List();
        var customerList = new collection.List();
        var mvarr = createArr();
        mvarr.forEach(function (elt){ mvlist.append(elt); });
        
        checkout('jedi', 'Pulp Fiction', mvlist, customerList);
        assert.strictEqual(mvlist.length(), 20);
        assert.ok(!mvlist.contains('Pulp Fiction'));
        assert.ok(customerList.getElement().name, 'jedi');
        assert.ok(customerList.getElement().movie, 'Pulp Fiction');
        assert.strictEqual(customerList.length(), 1);

        done();
    });
    
    it('用户显示', function(done){
        var mvlist = new collection.List();
        var customerList = new collection.List();
        var mvarr = createArr();
        mvarr.forEach(function (elt){ mvlist.append(elt); });
        
        checkout('jedi', 'Pulp Fiction', mvlist, customerList);
        checkout('becky', 'Star Wars: Episode V - The Empire Strikes Back', mvlist, customerList);

        var customers = [];
        for(customerList.front(); customerList.currPos() < customerList.length(); customerList.next())
            customers[customers.length] = customerList.getElement().name;
        assert.strictEqual(customers.length, 2);
        assert.strictEqual(customers[0], 'jedi');
        assert.strictEqual(customers[1], 'becky');
        
        done();
    });
});