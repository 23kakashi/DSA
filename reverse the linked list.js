
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
}

// Complete the function below

function reverse(head) {
  let cur = head
  let prev = null

  while(cur !== null) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
  }
  return prev
}

