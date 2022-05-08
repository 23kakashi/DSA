
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

var rotateRight = function(head, k) {
  
  let count = 0
  let cur = head
  
  // total elements in linked list
  while(cur) {
      count++
      cur = cur.next
  }
  
  // min rotation required
  k = k % count
  // console.log(k)
  
  cur = head
  let prev = head
  
  while(k > 0) {
      cur = cur.next
      k--
  }
  // console.log(cur)
  
  while(cur.next !== null) {
      cur = cur.next
      prev = prev.next
  }
  // console.log(cur)
  // console.log(prev)
  
  cur.next = head
  head = prev.next
  prev.next = null
  return head
}

