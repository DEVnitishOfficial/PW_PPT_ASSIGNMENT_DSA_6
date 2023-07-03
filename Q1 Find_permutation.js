/* <aside>
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

</aside> */

// TIME COMPLEXITY →  O(n), where n is the length of the string s
// SPACE COMPLEXITY → O(n)

function findPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let low = 0;
    let high = 0;
  
    for (let i = 0; i < n + 1; i++) {
      if (i === n || s[i] === 'I') {
        perm[i] = high++;
        for (let j = i - 1; j >= low; j--) {
          perm[j] = high++;
        }
        low = i + 1;
      } else {
        high++;
      }
    }
  
    return perm;
  }
  
  const s = "IDID";
  const permutation = findPermutation(s);
  console.log('The valid permutation which satisfies the condition is :', permutation);
  