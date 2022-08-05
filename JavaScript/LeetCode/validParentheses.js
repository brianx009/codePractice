// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// const isValid = (s) => {
//     const stack = []; // creation of stack
    
//     for (let i = 0; i < s.length; i += 1) {// for loop that will go through the values of the string s
//       const top = stack[stack.length - 1]; // setting top = to the last value of the stack
//       if (s[i] === '(' || s[i] === '{' || s[i] === '[') { // if string index is equal to (, {, [
//         stack.push(s[i]); //push the value into our stack
//       } else if (s[i] === ')' && top === '(' && stack.length !== 0) { //else if string index is ), last inputed stack value is (, and the stacks length is not zero
//         stack.pop(); //pop off the rightmost value of the stack
//       } else if (s[i] === ']' && top === '[' && stack.length !== 0) { // else if string index is ], last inputed stack value is [, and stacks length is not zero
//         stack.pop();//pop off the rightmost value of the stack
//       } else if (s[i] === '}' && top === '{' && stack.length !== 0) { // else if string index is }, last inputed stack value is {, and stacks length is not zero
//         stack.pop();//pop off the rightmost value of the stack
//       } else {
//         return false; // if all other else if statements fail, return false -- else it will return true
//       }
//     }
    
//     return stack.length === 0; // return empty stack
//   };

//   console.log(isValid('[{}[]]'));
//example of what stack looks like
// [ - stack = [
// { - stack = [, {
// } - stack = [
// [ - stack = [, [
// ] - stack = [
// ] - stack = 

//alternative solution
// const isValid = (s) => {
//     const stack = []; // creation of an empty stack
//     const openSet = new Set(['(', '{', '[']); //creating what we consider a "open set"
//     const closeOpenMap = new Map([ //creating what we would consider a "close open map"
//       [')', '('],
//       ['}', '{'],
//       [']', '['],
//     ]);
    
//     for (let i = 0; i < s.length; i += 1) { // cycle through the entirety of the string
//       if (openSet.has(s[i])) { // if our open set has (, {, [ 
//         stack.push(s[i]); //push that character into our empty stack
//       } else {
//         const pop = stack.pop(); // setting pop equal to stack.pop which will pop off the last value in our stack
//         if (pop !== closeOpenMap.get(s[i])) { // if our popped off value is equal to itself then we return false
//           return false;
//         }
//       }
//     }
//     return stack.length === 0; //returns false if our stack length is not zero, and if it is it returns true
//   };

//   console.log(isValid('{}{'));

//more advanced method with timespace complexity = O(n).
//Key to solving this problem is to use a Stack and a Map.
const isValid = (s) => {
    if (s.length % 2 !== 0){
        return false;
    }
    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);

    for(let i = 0; i < s.length; i++){
        if (map.has(s[i])){
            stack.push(map.get(s[i]));
        }else if(s[i] !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('{}{['));
//pass 1:
// { - pushes } into stack
//current stack: }
//pass 2:
// } - fails the first if statement, goes to else, } is equal to stack.pop, so we continue and stack is empty due to the stack.pop being equal to s[i].
//current stack: 
//pass 3:
// { - pushes } into the stack
//current stack: }
//pass 4:
// [ - pushes ] into the stack
//because we got to the end of the string, our for loop stops, and we go to check if stack.length === 0, and since it is not then we return false.


