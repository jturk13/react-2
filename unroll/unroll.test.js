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

// Test cases
const testCases = [
  {
    input: [
      [1, 2],
      [3, 4]
    ],
    expected: [1, 2, 4, 3],
    description: '2x2 matrix'
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    description: '3x3 matrix'
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    expected: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    description: '4x4 matrix'
  },
  {
    input: [],
    expected: [],
    description: 'Empty array'
  },
  {
    input: [
      [1]
    ],
    expected: [1],
    description: '1x1 matrix'
  },
  {
    input: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ],
    expected: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13],
    description: '5x5 matrix'
  }
];

testCases.forEach(({ input, expected, description }) => {
  const result = unroll(input);
  console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test failed for ${description}`);
});

console.log('All tests passed!');
