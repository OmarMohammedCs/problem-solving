/**
 * Problem: Don't Give Me Five!
 *
 * Topic: Strings / Loops / Conditionals
 * Difficulty: 7 kyu
 *
 * Description:
 * Given a start number and an end number, count all numbers
 * in the range that do not contain the digit 5.
 *
 * Rules:
 * - Both start and end numbers are inclusive.
 * - Exclude any number that contains the digit 5.
 * - Both positive and negative numbers are allowed.
 *
 * Example:
 * Input: (1, 9) -> Output: 8
 * Input: (4, 17) -> Output: 12
 * Input: (5, 100) -> Output: 76
 *
 * Time Complexity: O(n * d)
 * Space Complexity: O(1)
 * 
 * Note:
 * n = end - start + 1
 * d = number of digits in each number
 */

function dontGiveMeFive(start, end) {
    let count = end - start + 1;

    for (let i = start; i <= end; i++) {
        if (String(i).includes("5")) {
            count--;
        }
    }

    return count;
}

// Test cases
console.log(dontGiveMeFive(1, 9));    // 8
console.log(dontGiveMeFive(4, 17));   // 12
console.log(dontGiveMeFive(5, 100));  // 76
console.log(dontGiveMeFive(2, 90));   // 72
console.log(dontGiveMeFive(6, 40));   // 30