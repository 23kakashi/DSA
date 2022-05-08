const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};
// Complete the function below
var fillGaps = function (head) {
  let cur = head
  let start = cur.data
  
  while(cur.next !== null) {
      
      if(cur.next.data === start + 1) {
          cur = cur.next
          start++
      } else {
          let temp = cur.next
          let newNode = new LinkedListNode(start + 1)
          newNode.next = temp
          cur.next = newNode
          cur = cur.next
          start++
      }
  }
  return head
};
