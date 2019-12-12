const string1 = "Mr John Smith    "

// Javascript has built in stuff for this...
function urlify(str) {
   return encodeURIComponent(str);
}

console.log(`"${string1}" becomes "${urlify(string1)}"`)
