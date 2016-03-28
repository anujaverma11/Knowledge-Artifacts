var queueNode = function(value){
  this.value = null;
  this.next = null;
}

var queue = function(){
  this.first = null;
  this.last = null;
  this.queueSize = null;
}

queue.prototype.enqueue = function(value){
  if this.first == null
    this.first = new queueNode(value);
    this.last = this.first;
}