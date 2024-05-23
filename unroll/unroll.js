function unroll(square) {
    if (!square || square.length === 0) return [];
    
    const result = [];
    let n = square.length;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse from left to right along the top row
      for (let i = left; i <= right; i++) {
        result.push(square[top][i]);
      }
      top++;
  
      // Traverse from top to bottom along the right column
      for (let i = top; i <= bottom; i++) {
        result.push(square[i][right]);
      }
      right--;
  
      if (top <= bottom) {
        // Traverse from right to left along the bottom row
        for (let i = right; i >= left; i--) {
          result.push(square[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        // Traverse from bottom to top along the left column
        for (let i = bottom; i >= top; i--) {
          result.push(square[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  console.log(unroll(square)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  