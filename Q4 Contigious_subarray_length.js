/* <aside>
💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

</aside> */

// TECHNIQUE →  "prefix sum" along with a hash map
// TIME COMPLEXITY → O(n)
// SPACE COMPLEXITY → O(n)
function findMaxLength(nums) {
    const n = nums.length;
    let maxLength = 0;
    let count = 0;
    const countMap = new Map();
  
    // Initialize countMap with an initial count of 0 at index -1
    countMap.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      // Increment count by 1 if the element is 1, otherwise decrement by 1
      count += nums[i] === 1 ? 1 : -1;
  
      if (countMap.has(count)) {
        // If the count is already in the countMap, update maxLength
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        // If the count is not in the countMap, add it with the current index
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  const nums = [0, 1];
  const result = findMaxLength(nums);
  console.log(result);
  