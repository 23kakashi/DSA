
const newNode = class {
  constructor(nodeData) {
      this.data = nodeData
      this.next = null
  }
};

// Complete the function below

function insertNodeAtHead(head, data) {
  // console.log("data",data)
  console.log("head",head)
  let Node = new newNode(data)
  
  // console.log(Node)
  if(head === null){
      head = Node
      // console.log(Node,head)
  }else{
      Node.next = head
      head = Node
      // console.log("head",head)
  }  
  return head
}

