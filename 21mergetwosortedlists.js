/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function (list1, list2) {
  let newArray = [];

  while (list1.length > 0 && list2.length > 0) {
    if (list1[0] < list2[0]) {
      newArray.push(list1[0]);
      list1.shift();
    } else {
      newArray.push(list2[0]);
      list2.shift();
    }
  }
  return newArray;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// think this is wrong, they're referring to Linked Lists
