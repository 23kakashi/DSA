
const newNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

// Complete the function below

function insertNodeAtTail(head, data) {
  
  let Node = new newNode(data)
  
  if(head === null) {
      head = Node
  } else {
      let temp = head 
      while(temp.next !== null) {
          temp = temp.next
      }
      temp.next = Node
  }
  return head
}

