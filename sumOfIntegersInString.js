/**
- Problem: Sum of Integers in String
 *
- Topic: Strings / Regular Expressions / Functional Programming
- Difficulty: 7 kyu
 *
- Description:
- Calculate the sum of all the integers present in a given string.
- Consecutive digits are treated as a single multi-digit integer.
 *
- Rules:
- Find all contiguous sequences of digits (integers) within the string.
- Convert each sequence into a base-10 number and calculate their total sum.
- If no integers are found in the string, return 0.
 *
- Example:
- Input: "The30quick20brown10f0x1203jumps914b348msg007"
- Output: 2519 (30 + 20 + 10 + 0 + 1203 + 914 + 348 + 7)
 *
- Time Complexity: O(n)
- Space Complexity: O(n)
 */

function sumOfIntegersInString(s) {
  const numbers = s.match(/\d+/g);
  
  if (!numbers) return 0;
  
  return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

// Test cases
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914b348msg007")); // 2519
console.log(sumOfIntegersInString("Dogs are 55 times better than 10 cats")); // 65
console.log(sumOfIntegersInString("No numbers here!")); // 0