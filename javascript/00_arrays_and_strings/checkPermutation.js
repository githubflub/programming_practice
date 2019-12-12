// Write a function to determine if one string is the same as another

const string1 = 'qwertyuiop'
const string2 = 'poiuytrewq'
const string3 = 'qA7!3i^WOeNoAuub'

function countChars(str) {
   const count = {}

   for (let i = 0; i < str.length; i++) {
      const current_char = str[i];

      count[current_char] = (count[current_char] || 0) + 1;
   }

   return count
}

function checkPermutation(str1, str2) {
   if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return 'Invalid arguments...';
   }

   const storage1 = countChars(str1)
   const storage2 = countChars(str2)

   if (Object.keys(storage1).length !== Object.keys(storage2).length) {
      return false
   }

   for (key in storage1) {
      if (!(storage1[key] && storage1[key] === storage2[key])) {
         return false;
      }
   }

   return true;
}

console.log(`Is ${string1} a permutation of ${string2}?`, checkPermutation(string1, string2));
console.log(`Is ${string1} a permutation of ${string3}?`, checkPermutation(string1, string3));