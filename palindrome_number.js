/**
 * Problem: 9. Palindrome Number
 *
 * Topic: Strings / Two Pointers
 * Difficulty: Easy
 *
 * Description:
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:
 * Input: x = 121
 * Output: true
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 */

var isPalindrome = function(x) {
  let str = String(x);
  let reversed = str.split("").reverse().join("");

  return str === reversed;
};

// Test cases
console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
console.log(isPalindrome(1221)); // true