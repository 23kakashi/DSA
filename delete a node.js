
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

// Complete the function below

function deleteNode(head, position) {
  if(position === 0) {
      return head.next
  }
  
  head.next = deleteNode(head.next,position-1)
  return head
}

