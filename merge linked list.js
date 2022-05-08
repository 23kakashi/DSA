
const ListNode = class {
  constructor(nodeData) {
      this.val = nodeData;
      this.next = null;
  }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
  // if(list1 == null) return list2;
  // if(list2 == null) return list1;
  
  let newNode = new ListNode(0)
  let cur = newNode
  
  while(l1 !== null && l2 !== null) {
      if(l1.val <= l2.val) {
          cur.next = l1
          cur = l1
          l1 = l1.next
      } else {
          cur.next = l2
          cur = l2
          l2 = l2.next
      }
  }
  
  if(l1 === null) {
      cur.next = l2
  } else {
      cur.next = l1
  }
  
  return newNode.next
}

