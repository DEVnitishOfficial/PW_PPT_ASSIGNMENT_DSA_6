/* <aside>
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**

                7  0  0
1  0  0    x    0  0  0       =      7   0  0
-1  0  3        0  0  1              -7  0  3

**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]

</aside> */

function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1
    const n = mat2[0].length; // Number of columns in mat2
  
    // Create an empty result matrix
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    // Convert mat2 into a map for efficient column access
    const mat2Map = new Map();
    for (let j = 0; j < k; j++) {
      mat2Map.set(j, new Map());
      for (let i = 0; i < n; i++) {
        if (mat2[j][i] !== 0) {
          mat2Map.get(j).set(i, mat2[j][i]);
        }
      }
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < k; j++) {
        if (mat1[i][j] !== 0) {
          const row = mat1[i];
          const col = mat2Map.get(j);
          for (const [colIndex, colValue] of col) {
            result[i][colIndex] += row[j] * colValue;
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  
  const result = multiplySparseMatrices(mat1, mat2);
  console.log(result);
  