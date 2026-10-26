
/**
 * Problem: Total Points
 *
 * Topic: Arrays / Strings / Loops / Conditionals
 * Difficulty: 8 kyu
 *
 * Description:
 * Given an array of match results in the format "x:y",
 * calculate the total points earned by our football team.
 *
 * Rules:
 * - Win (x > y): 3 points
 * - Draw (x === y): 1 point
 * - Loss (x < y): 0 points
 *
 * Example:
 * Input: ["3:1", "2:2", "0:1"]
 * Output: 4
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function points(games) {
    let totalPoints = 0;

    for (let i = 0; i < games.length; i++) {
        const ourScore = Number(games[i][0]);
        const opponentScore = Number(games[i][2]);

        if (ourScore > opponentScore) {
            totalPoints += 3;
        } else if (ourScore < opponentScore) {
            totalPoints += 0;
        } else {
            totalPoints += 1;
        }
    }

    return totalPoints;
}

// Test cases
console.log(points(["3:1"])); // 3
console.log(points(["2:2"])); // 1
console.log(points(["0:1"])); // 0
console.log(points(["3:1", "2:2", "0:1"])); // 4
