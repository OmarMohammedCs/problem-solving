/**
 * Problem: Basic Math (Add or Subtract)
 *
 * Topic: Strings / Regex / Loops / Arithmetic
 * Difficulty: 7 kyu
 *
 * Description:
 * Given a string containing numbers and mathematical
 * operations (plus or minus), calculate the final result.
 *
 * Rules:
 * - plus: Add the next number.
 * - minus: Subtract the next number.
 * - Return the result as a String.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Test Cases:
 * calculate("1plus2plus3plus4") => "10"
 * calculate("1minus2minus3minus4") => "-8"
 * calculate("10plus20plus30minus40") => "20"
 */

function calculate(str) {
    if (!str) return

    const cal = str.match(/\d+|plus|minus/g)
    let n = Number(cal[0])

    for (let i = 1; i < cal.length; i += 2) {
        if (cal[i] === 'plus') {
            n += Number(cal[i + 1])
        } else if (cal[i] === 'minus') {
            n -= Number(cal[i + 1])
        }
    }

    return String(n)
}

console.log(calculate("1plus2plus3plus4"))
console.log(calculate("1minus2minus3minus4"))
console.log(calculate("10plus20plus30minus40"))
