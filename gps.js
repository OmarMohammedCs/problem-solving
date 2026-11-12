/*
Problem: GPS
Topic: Arrays, Loops, Math.floor()
Difficulty: 5 kyu

Time Complexity: O(n)
Space Complexity: O(n)
*/

function gps(s, x) {
    if (x.length <= 1) return 0;

    let speeds = [];

    for (let i = 0; i < x.length - 1; i++) {
        speeds.push((x[i + 1] - x[i]) * 3600 / s);
    }

    return Math.floor(Math.max(...speeds));
}

// Test Cases
console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0])); // 74
console.log(gps(15, [])); // 0
console.log(gps(15, [0.0])); // 0