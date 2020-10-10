exports.List = function() {
    // List elements storage
    this.dataStore = [];
    
    // Properties
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    
    // Methods
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
};