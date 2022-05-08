const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

function nth_node(head,n){
  let cur = head
  count = 1
  while(cur.next !== null) {
      count++
      cur = cur.next
  }
  // console.log(count)
  // console.log(cur)
  
  let reversePosition = count - n + 1
  // console.log(reversePosition)
  
  let i = 1
  
  cur = head
  while(i < reversePosition) {
      cur = cur.next
      // console.log(cur)
      i++
  }
  return cur.data
}
