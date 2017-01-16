/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
    this.stack=[];
  };

   // add an item to the top of the stack
   Stack.prototype.push = function(value){
    this.stack.push(value);
    return this.size();

  };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){
    return this.stack.pop();    
  };

   // return the number of items in the stack
   Stack.prototype.size = function(){
    return this.stack.length
  };

  Stack.prototype.getStor = function(){
    return this.stack
  };

 /**
   * Queue Class
   */
   var Queue = function() {

   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     return inbox.push(value);
   }
   
   // called to remove an item from the `queue`
   this.dequeue = function(){
    outbox.stack = inbox.stack.reverse()
    var arr = outbox.stack.reverse()
    inbox.stack = arr.reverse()
    return outbox.pop()
  }

   // should return the number of items in the queue
   this.size = function(){
    return inbox.stack.length
  };

};