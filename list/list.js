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
        for (var i=0; i<this.dataStore.length; i++) {
            if (this.dataStore[i] == element ) {
                return true;
            }
        }
        return false;
    };

    /**
     * 实现front
     */
    this.front = function() {
        this.pos = 0;
    };

    /**
     * 实现end
     */
    this.end = function() {
        this.end = this.listSize - 1;
    };

    /**
     * 实现prev
     */
    this.prev = function() {
        if (this.listSize > 0) {
            --this.pos;
        }
    };

    /**
     * 实现next
     */
    this.next = function() {
        if (this.listSize > 0) {
            ++this.pos;
        } 
    };
    
    /**
     * 实现currPos
     */
    this.currPos = function() {
        return this.pos;
    };

    /**
     * 移动List的pos至指定元素
     * @param {*} position 目标元素的下标
     */
    this.moveTo = function(position) {
        this.pos = position;
    };

    // this.pos = 0;
    // this.getElement = getElement;
};