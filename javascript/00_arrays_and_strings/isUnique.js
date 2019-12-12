// Implement an algorithm to determine if a string has all unique characters
// without using extra memeory???

const string1 = 'qwertyuiop'
const string2 = 'qA7!3i^WOeNoAuub'

// This solution uses extra memory (the storage object)
function isUnique(str = '') {
   const storage = {};
   for (let i = 0; i < str.length; i++) {
      const current_char = str[i];
      if (!!storage[current_char]) {
         return false;
      }
      else {
         storage[current_char] = true
      }
   }

   return true;
}

console.log(`Is ${string1} unique?`, isUnique(string1))
console.log(`Is ${string2} unique?`, isUnique(string2))



