// file: filmsapp.js
// description: 实现影碟清单管理

var collection = require("./list");

/**
 * customer
 */
exports.Customer = function(name, movie) {
    this.name = name;
    this.movie = movie;
};

/**
 * filmsapp.List
 */
exports.filmsapp = function() {

    /**
     * 影片存储
     */
    this.movies = new collection.List();

    /**
     * 用户列表
     */
    this.customers = new collection.List();

    /**
     * 将Movies信息初始化至filmsapp存储区
     * @param {*} datas Movies的数组
     */
    this.initMovies = function(datas) {
        for (var i=0; i<datas.length(); i++)
            this.movies.append(datas[i]);
    };

    /**
     * 显示影片清单
     */
    this.displayList = function() {
        return this.movies.toString();
    };

    /**
     * 借出影片
     */
    this.checkOut = function(name, movie) {
        if (this.movies.find(movie)) {
            var customer = new Customer(name, movie);
            this.customers.append(customer);
            this.movies.remove(movie);
        }
    };
};
