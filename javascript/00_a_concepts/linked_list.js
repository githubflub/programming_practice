console.log("Hello from linked list");
// Things to know about linked lists
// They use 2 classes: a node class, a linked list class.
// Node class has two properties: data and next node.
// linked list has 2 properties: head and size.

// Typical insertion methods
// addFirst
// addAfterIndex
// push

// Typical deletion methods
// deleteByValue
// deleteByIndex

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   test() {
      this.size = 1;
      console.log("This worked??")
   }
}

const alf = new LinkedList()
alf.test();
console.log(alf.size);