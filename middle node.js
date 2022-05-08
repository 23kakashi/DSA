const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

var middleNode = function(head) {
  let cur = head
  count = 1
  while(cur.next !== null) {
      count++
      cur = cur.next
  }
  // console.log(count)
  
  let mid = null
  if(count % 2 === 0) {
      mid = (count/2) + 1
  } else {
      mid = Math.ceil(count/2)
  }
  // console.log(mid)
  
  let i = 1
  
  cur = head
  while(i < mid) {
      cur = cur.next
      // console.log(cur)
      i++
  }
  return cur.data
};

