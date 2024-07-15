// Create an array of strings and print the longest string.

const str = ['Inception', 'Interstellar', 'The Dark Knight', '6 underground'];
let longest= str[0];
for (let i = 1; i < str.length; i++) {
  if (str[i].length > longest.length) {
    longest = str[i];
  }
}
console.log(longest);