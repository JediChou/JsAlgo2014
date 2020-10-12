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

    /**
     * 返回List中的元素数量
     */
    this.length = function() {
        return this.listSize;
    };

    /**
     * 返回List中的字符串输出
     */
    this.toString = function() {
        return this.dataStore;
    };

    /**
     * 向列表中插入元素
     * @param {*} element 新增元素
     * @param {*} after 目标元素
     */
    this.insert = function(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    
    /**
     * 清理所有元素
     */
    this.clear = function() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = 0;
    };
    
    /**
     * 检查指定元素是否在列表中
     * @param {*} element 待检索元素
     */
    this.contains = function(element) {
        for (var i=0; i<this.listSize-1; i++) {
            if (this.dataStore[i] == element ) {
                return true;
            }
        }
        return false;
    };

    // this.pos = 0;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
};