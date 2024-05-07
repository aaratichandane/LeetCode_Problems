class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


function deleteDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const list = new ListNode(1, new ListNode(1, new ListNode(2)));
const result = deleteDuplicates(list);
console.log(result);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  