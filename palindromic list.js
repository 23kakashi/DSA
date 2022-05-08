const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};
// Complete the function below
var isPalindrome = function (head) {
  let cur = head
  let count = 0
  let slow = head
  let fast = head
  
  if(head !== null) {
      while (fast != null && fast.next != null) {
          fast = fast.next.next
          slow = slow.next
          count++
      }
  }
  // console.log(count)
  let ans = reverse(slow)
  // console.log(ans)
  

  while(count > 0) {
      if(cur.data === ans.data) {
          cur = cur.next
          ans = ans.next
          count--
      } else {
          return false
      }
  }
  return true
};

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
