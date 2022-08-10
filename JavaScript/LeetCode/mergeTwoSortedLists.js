// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
//Example: Input: list1 = [1,2,4], list2 = [1,3,4]
//         Output: [1,1,2,3,4,4]

const { ListRounded } = require("@material-ui/icons")

// var mergeTwoLists = function(list1, list2){
//     if (list1 == null) return list2;
//     if (list2 == null) return list1;

//     if (list1.val < list2.val){
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     }else{
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };
// let a = [1,2,3,4];
// let b = [5,6];

// console.log(mergeTwoLists(a,b));
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode();   //dummy is going to hold the newly created linked list
    let prev = dummy;               //prev is being used to store the value of either list 1 or list 2 when doing the comparisons of which is larger

    while (list1 && list2){ //while there is a value existing in list1 and list 2
        if (list1.val <= list2.val){  // checks if list 1 node is less than or equal to list 2 node
            prev.next = list1;        // if it is then we break the normal node flow to switch to the list we want to access
            prev = list1;             // prev is now equal to the value in list 1
            list1 = list1.next;       // list 1 node is shifted to the next node for comparison in the next iteration
        }else{                        //else this if list 1 node is larger
            prev.next = list2;        //prev.next is set equal to list 2
            prev = list2;             //prev is equal to list 2 value
            list2 = list2.next        // list 2 node is shifted to the next node for comparison in the next iteration
        }
    }
    if(!list1) prev.next = list2;     //if list 1 is null, send the pointer to point at list 2 to get last value
    if(!list2) prev.next = list1;     //if list 2 is null, send the pointer to point at list 1 to get last value

    return dummy.next;                //return dummy.next in order to see the newly created organized list
}

//Example of iterations in list 
//list1 = 1-> 2-> 4
//list2 = 1-> 3-> 4
//1st pass:
// list1 first node value = 1, list2 first node value = 1
//(1 <= 1), since 1 is equal to 1 we run the first if statement and decide
//prev.next = 1-> 2-> 4
//prev = 1
//list1 = 2
//2nd pass:
// list1 second node value = 2, list2 first node value = 1
//(2 <= 1), since 2 is greater than 1 we run the else statement and decide
//prev.next = 1-> 3-> 4
//prev = 1
//list2 = 3 
//3rd pass:
// list1 second node value = 2, list2 second node value = 3
//(2 <= 3), since 2 is less than 1 we run the if statement and decide
//prev.next = 2-> 4
//prev = 2
//list1 = 4
//4th pass:
// list1 third node value = 4, list2 second node value = 3
//(4 <= 3), since 4 is greater than 3 we run the else statement and decide
//prev.next = 3-> 4
//prev = 3
//list2 = 4 
//5th pass:
// list1 third node value = 4, list2 third node value = 4
//(4 <= 4), since 4 is equal to 4 we run the if statement and decide
//prev.next = 4
//prev = 4
//list1 = null
//6th pass:
// list1 third node value = null, list2 third node value = 4
//(null <= 4), since 4 is greater than null we run the else statement and decide
//prev.next = 4
//prev = 4
//list2 = null

//Time complexity of this solution is O(n) since we only ever visit every value in the two lists once
//Space complexity is O(1) as we are always constantly using the same dummy node and the same previous
//node. We are never creating any new memory allocations with our code.
//When working with linked lists, always remember to use dummy nodes!!
  



