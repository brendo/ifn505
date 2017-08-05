/**
 * Algorithm: SequentialSearch(A[0..n - 1], K)
 *
 * Searches for a given value in a given array by sequential search
 * Input: An array `A[0..n - 1]`, and a search key `K`
 * Output: The index of the first element of `A` that matches `K`
 *         or `-1` if there are no matching elements
 *
 * i ← 0
 * while i < n and A[i] ≠ K do
 *   i ← i + 1
 * if i < n return i
 * else return -1
 */
function SequentialSearch (A, K) {
  var i = 0
  var n = A.length

  while (i < n && A[i] !== K) {
    i++
  }

  return (i < n) ? i : -1
}

// -----------------------------

const test = require('tape')

test('SequentialSearch', (t) => {
  const vectors = [
    // A, K, expected index
    [[1, 2, 3], 2, 1],
    [[10, 20, 30, 40, 50], 50, 4],
    [[1, 4, -3, 2], -3, 2],
    [[1, 2, 3], 4, -1]
  ]

  t.plan(vectors.length)

  vectors.forEach((v) => {
    const [A, K, expectedIndex] = v
    t.equal(SequentialSearch(A, K), expectedIndex)
  })
})
