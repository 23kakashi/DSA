
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {

  let main = null
  let curr = head
  let index = 0
  
  while (index < position) {
      main = curr
      curr = curr.next
      index++
  }
  // console.log("main----",main)
  console.log("curr----", curr)
  if (curr) {
      let temp = new LinkedListNode(curr.data)
      console.log(temp)
      temp.next = curr.next
      console.log(temp)
      
      curr.data = data
      curr.next = temp
  }
  else {
      main.next = new LinkedListNode(data)
  }
  // console.log("head", head)
  return head
}