
/**
 * Problem: Battery Bars
 *
 * Topic: Strings / Math
 * Difficulty: 8 kyu
 *
 * Description:
 * Given a percentage representing a phone's battery charge,
 * return a string representing the battery as 5 bars.
 *
 * Each bar represents 20% of the battery charge.
 * A bar lights up only when its full 20% is reached.
 *
 * '#' represents a lit bar.
 * '.' represents an empty bar.
 * The result must be wrapped in square brackets.
 *
 * Examples:
 * Input: percent = 100
 * Output: "[#####]"
 *
 * Input: percent = 70
 * Output: "[###..]"
 *
 * Input: percent = 20
 * Output: "[#....]"
 *
 * Input: percent = 19
 * Output: "[.....]"
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function batteryBars(percent) {
    const litBars = Math.floor(percent / 20);
    const emptyBars = 5 - litBars;

    return "[" + "#".repeat(litBars) + ".".repeat(emptyBars) + "]";
}

// Test cases
console.log(batteryBars(100)); // "[#####]"
console.log(batteryBars(70));  // "[###..]"
console.log(batteryBars(20));  // "[#....]"
console.log(batteryBars(19));  // "[.....]"
console.log(batteryBars(0));   // "[.....]"
