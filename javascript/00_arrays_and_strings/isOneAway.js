const string1 = 'bale'
const string2 = 'pale'
const string3 = 'ale'
const string4 = 'poo'
const string5 = 'calamazoo'
const string6 = 'ble'

function isOneAway(str1, str2) {
   if (Math.abs(str1.length - str2.length) > 1) {
      return false;
   }

   let long_str
   let short_str

   if (str1.length > str2.length) {
      long_str = str1;
      short_str = str2;
   }
   else if (str1.length < str2.length) {
      long_str = str2;
      short_str = str1;
   }

   let change_count = 0;
   if (str1.length === str2.length) {
      for (let i = 0; i < str1.length; i++) {
         if (str1[i] !== str2[i]) {
            change_count++;
         }
      }
   }
   else {
      let offset = 0;
      for (let i = 0; i < long_str.length; i++) {
         if (long_str[i] !== short_str[i - offset]) {
            offset += 1;
            change_count++;
         }
      }
   }

   if (change_count <= 1) {
      return true;
   }

   return false;
}

console.log(`Is "${string1}" one away from "${string2}"? ${isOneAway(string1, string2)}`)
console.log(`Is "${string1}" one away from "${string3}"? ${isOneAway(string1, string3)}`)
console.log(`Is "${string1}" one away from "${string4}"? ${isOneAway(string1, string4)}`)
console.log(`Is "${string1}" one away from "${string5}"? ${isOneAway(string1, string5)}`)
console.log(`Is "${string1}" one away from "${string6}"? ${isOneAway(string1, string6)}`)
