exports.List = function() {
    
    ////////////////////////////////////////////////
    // List elements storage
    this.dataStore = [];
    
    ////////////////////////////////////////////////
    // Properties
    this.listSize = 0;
    this.pos = 0;
    // this.length = length;
    
    ////////////////////////////////////////////////
    // Methods
    
    // append method
    this.append = function(element) {
        // 平易近人的写法(有点笨笨的样子)
        // this.dataStore.push(element);
        // this.listSize++;

        // 短码写法
        this.dataStore[this.listSize++] = element;
    };

    // find method
    this.find = function(element) {
        for (var i=0; i<this.dataStore.length; i++)
            if (this.dataStore[i] == element)
                return i;
        return -1;
    };
    
    // remove method
    this.remove = function(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };


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