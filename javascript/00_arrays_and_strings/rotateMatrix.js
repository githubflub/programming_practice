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
printMatrix(my_matrix)

function rotateMatrix(matrix) {

}

function printMatrix(matrix) {
   console.log(`Here is your matrix`);

   for (let i = 0; i < MATRIX_SIZE; i++) {
      let row = '  '

      for (let j = 0; j < MATRIX_SIZE; j++) {
         row += `${matrix[i][j]}  `;
      }

      console.log(row);
   }
}