const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};
// Complete the function below
var checkWavePattern = function (head) {
  let cur = head
  let ans
  if(cur.data > cur.next.data) {
      ans = test1(head) 
  } 
  else if(cur.data < cur.next.data) {
      ans = test2(head)  
  }
  return ans
};

const test1 = (head) => {
  let cur = head
  
  let count = 0
  while(cur.next !== null) {
      if(count % 2 === 0) {
          if(cur.data < cur.next.data) {
              return false
          }
      } else {
          if(cur.data > cur.next.data) {
              return false
          }
      }
      count++
      cur = cur.next
  }
  return true
}

const test2 = (head) => {
  let cur = head
  
  let count = 0
  while(cur.next !== null) {
      if(count % 2 === 0) {
          if(cur.data > cur.next.data) {
              return false
          }
      } else {
          if(cur.data < cur.next.data) {
              return false
          }
      }
      count++
      cur = cur.next
  }
  return true
}
