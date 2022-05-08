
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};
// Complete the function below

//  for a linked list to be cyclic none of the node shoud point to null
var hasCycle = function(head) {
  let slow = head
  let fast = head.next
  
  while(slow !== fast) {
      
      if(fast === null || fast.next === null) {
          return false
      }
      slow = slow.next
      fast = fast.next.next
  }
  return true
};

