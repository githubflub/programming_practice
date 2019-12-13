const string1 = 'aabcccccaaa'
const string2 = 'qwertyuiop'

function stringCompression(str) {
   const storage = []

   let repeat_count = 1;
   let counting_char
   let is_double = false
   for (let i = 0; i < str.length; i++) {
      const current_char = str[i];
      if (counting_char !== current_char) {

         if (!!counting_char) {
            storage.push(`${repeat_count}`)
            repeat_count = 1;
         }

         storage.push(str[i])
         counting_char = str[i];
      }
      else if (current_char === counting_char) {
         repeat_count++;
         is_double = true
      }
   }

   // add final count
   storage.push(`${repeat_count}`)

   let result = ''

   if (is_double) {
      storage.forEach(char => {
         result += char
      })
   }
   else {
      result = str;
   }

   return result;
}

console.log(`"${string1}" compressed is "${stringCompression(string1)}"`)
console.log(`"${string2}" compressed is "${stringCompression(string2)}"`)