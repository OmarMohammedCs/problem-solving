/**
- Problem: Sum Without Highest and Lowest Number
 *
- Topic: Arrays / Reduce / Math Methods
- Difficulty: 8 kyu
 *
- Description:
- Given an array of numbers, calculate the sum of all the numbers 
- except the highest and lowest numbers (element(s) with the highest and lowest value).
 *
- Rules:
- Find and exclude the minimum and maximum values from the array.
- Sum up all the remaining numbers.
- If an empty value, null, or an empty array is passed, handle accordingly.
 *
- Example:
- Input: [10, 20, 30, 40, 90]
- Output: 90 (20 + 30 + 40)
 *
- Time Complexity: O(n)
- Space Complexity: O(1)
 */

function sumArray(array) {
    if (!array || array.length <= 1) return 0;
    
    const minNum = Math.min(...array);
    const maxNum = Math.max(...array);
    
    const totalSum = array.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    
    return totalSum - minNum - maxNum;
}

// Test cases
console.log(sumArray([10, 20, 30, 40, 90])); // 90
console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([3, 5])); // 0