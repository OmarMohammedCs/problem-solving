
/**
 * Problem: Neutralise
 *
 * Topic: Strings / Loops / Comparison
 * Difficulty: 8 kyu
 *
 * Description:
 * Given two strings containing '+' and '-',
 * compare each character at the same position.
 *
 * Rules:
 * - Same characters: Keep the character.
 * - Different characters: Replace with '0'.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Test Cases:
 * neutralise("++--++", "--++--") => "000000"
 * neutralise("--++--", "--++--") => "--++--"
 * neutralise("-+-+-+", "-+-+-+") => "-+-+-+"
 * neutralise("-++-", "-+-+") => "-+00"
 */

function neutralise(s1, s2) {
    let result = ''

    for (let i = 0; i < s1.length; i++) {
        result += s1[i] === s2[i] ? s1[i] : '0'
    }

    return result
}

console.log(neutralise("++--++", "--++--"))
console.log(neutralise("--++--", "--++--"))
console.log(neutralise("-+-+-+", "-+-+-+"))
console.log(neutralise("-++-", "-+-+"))
