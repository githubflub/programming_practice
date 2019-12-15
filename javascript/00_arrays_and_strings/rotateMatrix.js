const my_matrix = []

// fill matrix
const MATRIX_SIZE = 5;
for (let i = 0; i < MATRIX_SIZE; i++) {
   my_matrix[i] = [];

   for (let j = 0; j < MATRIX_SIZE; j++) {
      my_matrix[i][j] = j
   }
}

// print matrix
printMatrix(my_matrix, 'Here is your matrix')

// rotate matrix
printMatrix(rotateMatrix(my_matrix), "Here is your rotated matrix")

function rotateMatrix(matrix) {
   const n = MATRIX_SIZE - 1;

   for (let i = 0; i < MATRIX_SIZE; i++) {
      for (let j = i; j < n - i; j++) {
         let swap = matrix[i][j];
         matrix[i][j] = matrix[n - j][i];
         matrix[n - j][i] = matrix[n - i][n - j]
         matrix[n - i][n - j] = matrix[j][n - i]
         matrix[j][n - i] = swap;
      }
   }

   return matrix;
}

function printMatrix(matrix, message = '') {
   console.log(message);

   for (let i = 0; i < MATRIX_SIZE; i++) {
      let row = '  '

      for (let j = 0; j < MATRIX_SIZE; j++) {
         row += `${matrix[i][j]}  `;
      }

      console.log(row);
   }
}