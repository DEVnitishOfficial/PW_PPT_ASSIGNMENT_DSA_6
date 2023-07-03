/* <aside>
💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


            STRICTLY INCREASING       STRICTLY DECREASING
         0     2     3    4     5     2      1      0
                            MOUNTAIN ARRAY

        INCREASING BUT NOT STRICTLY    STRICTLY DECREASING
          0     2      3      3     5      2     1     0
                         NOT A MOUNTAIN ARRAY

**Example 1:**

**Input:** arr = [2,1]

**Output:**  false
 */

// TIME COMPLEXITY → O(n)
// SPACE COMPLEXITY → O(1)
function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Check if array length is less than 3
    if (n < 3) {
      return false;
    }
  
    // Increasing phase
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Check if peak is at the first or last position
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Decreasing phase
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    // Check if the entire array is traversed
    return i === n - 1;
  }
  
  const arr = [2, 1];
  const result = validMountainArray(arr);
  console.log(result);
  