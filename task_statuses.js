/**
- Problem: Rotating Options / Cyclic Array
 *
- Topic: Arrays / Modulo / Strings
- Difficulty: 8 kyu
 *
- Description:
- Given a number representing a step or item count, return the corresponding 
- status message from a fixed rotating list of options.
 *
- Rules:
- The list cycles back to the beginning after reaching the end.
- Return the correct status string based on 1-based index (step > 0).
 *
- Example:
- Input: 7 -> Output: "Task Started"
- Input: 3 -> Output: "In Review"
- Input: 6 -> Output: "Archived"
 *
- Time Complexity: O(1)
- Space Complexity: O(1)
 */

function getStatusByStep(step) {
    const statuses = [
        "Task Started",
        "In Progress",
        "In Review",
        "Pending Approval",
        "Completed",
        "Archived"
    ];

    return statuses[(step - 1) % statuses.length];
}

// Test cases
console.log(getStatusByStep(7)); // "Task Started"
console.log(getStatusByStep(3)); // "In Review"
console.log(getStatusByStep(6)); // "Archived"