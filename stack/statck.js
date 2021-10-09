/**
 * collection.Stack
 */
exports.Stack = function() {
    this.dataStore = [];
    this.top = 0;

    // 入栈
    this.push = function(element) {
        this.dataStore[this.top++] = element;
    };

    // 出栈
    this.pop = function() {
        return this.dataStore[--this.top];
    };

    // 取栈顶
    this.peek = function() {
        return this.dataStore[this.top-1];
    };

    this.length = function() {
        return this.top;
    };

    this.clear = function() {
        this.top = 0;
    };
};