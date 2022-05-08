
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

// Complete the function below

var deleteDuplicates = function(head) {
  let cur = head
  
  while(cur.next !== null) {
      if(cur.data === cur.next.data) {
          cur.next = cur.next.next
      } else {
          cur = cur.next
      }
  }
  return head;
};

