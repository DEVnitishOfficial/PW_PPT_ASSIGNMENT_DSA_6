/*Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**

                               1  →   2  →  3  
                                            ↓
                               8 →    9     4
                               ↑            ↓
                               7   ←   6 ←  5
**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]  
*/

// TIME COMPLEXITY → O(n^2)
// SPACE COMPLEXITY → O(n^2)
function generateSpiralMatrix(n) {
    // Initialize the matrix with zeroes
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1; // Starting number
    let top = 0; // Top row index
    let bottom = n - 1; // Bottom row index
    let left = 0; // Left column index
    let right = n - 1; // Right column index
  
    while (top <= bottom && left <= right) {
      // Fill the top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Fill the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Fill the bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      // Fill the left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  // Example usage
  const n = 3;
  const spiralMatrix = generateSpiralMatrix(n);
  console.log(spiralMatrix);
  