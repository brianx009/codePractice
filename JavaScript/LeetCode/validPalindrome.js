// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is the same series of letters spelled forward and backwards.
var isPalindrome = function(s) {
    let str = s.match(/[A-Za-z0-9]/g);       //takes a regex expression and itterates throught the string and returns an array of what matches the description. If empty it returns "null"
    if (str === null) {return true};         //if the string is empty and is null we are returning "true"
    str = str.join("").toLowerCase();        // converting all the string to lowercase to make sure all the letters are the same
    
    for (let i = 0; i < str.length; i++) {  //for loop to iterate through the string
        if (str[i] !== str[str.length - 1 - i]) { //one pointer starts at the leftmost side of the string and the other starts at the rightmost character and we begin comparing the two to see if they are equal
            return false;                                        // if for whatever reason they arent equal we are going to return false
        }
    }
    return true;                                                 //else if all the characters are equal, we break out the loop and return true.                                    
};

// time complexity is O(n + n/2) because the match() by force goes through the entirety of the string to find what the regular expression is looking for,
//and then we cycle through half of the string in our for loop to do the comparison.
//question that arose: does doing .toLowerCase increase time complexity as well since we are having to cycle through the string again to convert all letters to lowercase ?

// Solution 2:
var isPalindrome = function (s) {
    if (s.length === 0) return true;        //if the string is equal to zero characters return true
  
    s = s.toLowerCase();                    //setting our string to lower case characters
    let i = 0, j = s.length - 1;            //setting i equal to index 0 and j equal to the last character index in the string
    while (i < j) {                         //while j index number is greater that i, we keep going, otherwise that means that j is checking a index we've already checked
      if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {       //if s[i] is a lowercase letter a-z or number 0-9
        i++;                                                                //increment our i count
        continue;
      }
      if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {       //if s[j] is a lowercase letter a-z or number 0-9
        j--;                                                                //increment our j count
        continue;
      }
      if (s[i] !== s[j]) {                                                  //if s[i] !== s[j] that means they are not equal and we return false
        return false;
      }
      i++;
      j--;
    }
  
    return true;
  };