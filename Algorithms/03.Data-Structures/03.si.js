// Implementing a Stack using Linked List

// instantiation for stackNode
var stackNode = function(value){
  this.value = value;
  this.next = null;
}

// instantiation for Stack
var stack = function(){
  // this.head = null;
  this.last = null;
  this.stackSize = 0;
}

// push method for linkedList
stack.prototype.push = function(value){
  if (this.head === null){
    // initializing value being inserted into an empty linkedList
    this.head = new listNode(value);
    this.tail = this.head;
    this.listLength++;
  } else {
    // adding a value to a linkedList of one or more items
    this.tail.next = new listNode(value);
    this.tail = this.tail.next;
    this.listLength++;
  }
}