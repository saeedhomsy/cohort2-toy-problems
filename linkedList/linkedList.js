/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  //this.node = {head:{value:1,next:{value:5,next:{value:6,next:null}}}};
  this.node = {head:{}};
};

//write methods here!
LinkedList.prototype.tail = function(){
	if (JSON.stringify(this.node.head) === '{}') {
		return null
	}else{
		var forTailNode = this.node.head;
		while(forTailNode.next !== null){
			forTailNode = forTailNode.next
		}
		return forTailNode;
	}
}


LinkedList.prototype.addToTail = function(val){
	if (JSON.stringify(this.node.head) === '{}') {
		this.node.head.value = val;
		this.node.head.next = null
	}else{
		var addedNode={value:val,next:null};
		var forTailNode = this.node.head;
		while(forTailNode.next !== null){
			forTailNode = forTailNode.next
		}
		forTailNode.next = addedNode;
	}
}


LinkedList.prototype.headValue = function(){
	return this.node.head.value
}


LinkedList.prototype.contains = function(val){
	var forTailNode = this.node.head;
	while(forTailNode.next !== null){
		if (forTailNode.value===val) {
			return true
		}
		forTailNode = forTailNode.next
	}
	return forTailNode.value===val;
}

LinkedList.prototype.removeHead = function(){
	var nextHeadNodes = this.node.head.next
	this.node.head = {nextHeadNodes};
}


LinkedList.prototype.tailValue = function(){
	if (JSON.stringify(this.node.head) === '{}') {
		return null
	}else{
		var addedNode={value:val,next:null};
		var forTailNode = this.node.head;
		while(forTailNode.next !== null){
			forTailNode = forTailNode.next
		}
		return forTailNode.value;
	}
}