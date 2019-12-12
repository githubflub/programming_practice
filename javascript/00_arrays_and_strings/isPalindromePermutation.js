const string1 = "Tact Coa"

// A palindrome is
// 1. a string of even numbered length such that
//    each character has an even count.
// 2. a string of odd numbered length such that
//    one and only character must have an odd count.
function isPalindromePermutation(original_str) {
   const storage = {}

   // remove spaces
   const str = original_str.replace(/ /g, '').toLowerCase();

   for (const char of str) {
      storage[char] = (storage[char] || 0) + 1
   }

   // Check the number of chars with odd counts
   let count = 0;
   Object.keys(storage).forEach(char => {
      if (storage[char] % 2 === 1) {
         // If count is odd
         count++;
      }
   })

   if (str.length % 2 === 1 && count === 1) {
      return true
   }
   else if (str.length % 2 === 0 && count === 0) {
      return true
   }

   return false;
}

console.log(`Is ${string1} a permutation of a palindrome? ${isPalindromePermutation(string1)}`)