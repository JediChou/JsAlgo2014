exports.List = function() {
    // List elements storage
    this.dataStore = [];
    
    // Properties
    this.listSize = 0;
    this.pos = 0;
    // this.length = length;
    
    // Methods
    
    // append method
    this.append = function(element) {
 
        // 平易近人的写法
        // this.dataStore.push(element);
        // this.listSize++;

        // 短码写法
        this.dataStore[this.listSize++] = element;
    };
    
    // this.clear = clear;
    // this.find = find;
    // this.toString = toString;
    // this.insert = insert;
    // this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.contains = contains;
};