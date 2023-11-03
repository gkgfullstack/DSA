// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)


function firstRepeatingCharacter(str){
  let visited = {};
  for(ch of str){
    if(visited[ch]) return ch;
    else visited[ch] = true;
  }
  return '\0';
}

// find repeated letter in a string 
// input = "Ganesh kumar gupta"
// output =  "gau"
function findRepeatedLetters(input) {
  const charCount = {};
  const repeatedLetters = [];

  for (let char of input.toLowerCase()) {
    if (char !== ' ' && charCount[char]) {
      if (!repeatedLetters.includes(char)) {
        repeatedLetters.push(char);
      }
    } else {
      charCount[char] = true;
    }
  }

  return repeatedLetters.join('');
}

const input = "Ganesh kumar gupta";
const output = findRepeatedLetters(input);
console.log(output); // Output: "gau"


