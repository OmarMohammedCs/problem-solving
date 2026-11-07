/**
 * Problem: Divisible by Three
 *
 * Topic: Strings / Arrays / Math
 * Difficulty: 7 kyu
 *
 * Description:
 * Given a string containing digits, determine whether the number
 * represented by the string is divisible by 3.
 *
 * The solution uses the divisibility rule of 3:
 * A number is divisible by 3 if the sum of its digits is divisible by 3.
 *
 * Approach:
 * 1. Convert the string into an array of digits.
 * 2. Convert each character into a Number.
 * 3. Calculate the sum of all digits using reduce().
 * 4. Check whether dividing the sum by 3 produces an integer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function divisibleByThree(str) {
    const digits = str.split('').map(Number);

    const sum = digits.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    return Number.isInteger(sum / 3);
}

// Test Cases
console.log(divisibleByThree("123"));      // true
console.log(divisibleByThree("8409"));     // true
console.log(divisibleByThree("100853"));   // false
console.log(divisibleByThree("33333333")); // true
console.log(divisibleByThree("7"));        // false