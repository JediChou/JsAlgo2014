/**
 * collection.List
 */
exports.List = function() {
    
    /**
     * List的元素存储区
     */
    this.dataStore = [];
    
    /**
     * List当前的元素数量
     */
    this.listSize = 0;

    
    /**
     * List的append方法，用于向列表中增加元素
     * @param {*} element 待增加的列表元素
     */
    this.append = function(element) {
        // 平易近人的写法(有点笨笨的样子)
        // this.dataStore.push(element);
        // this.listSize++;

        // 短码写法
        this.dataStore[this.listSize++] = element;
    };

    /**
     * List的find方法，用于查找元素
     * @param {*} element 待查找的列表元素
     */
    this.find = function(element) {
        for (var i=0; i<this.dataStore.length; i++)
            if (this.dataStore[i] == element)
                return i;
        return -1;
    };
    
    /**
     * List的remove方法，用于删除特定元素
     * @param {*} element
     */
    this.remove = function(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };

    // this.pos = 0;
    // this.length = length;
    // this.clear = clear;
    // this.toString = toString;
    // this.insert = insert;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.contains = contains;
};