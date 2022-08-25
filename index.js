function isPalindrome(word) {
  // iterate from the beginning to the middle
  for (let k = 0; k < word.length / 2; k++) {
    // check each letter to the correponding letter from the end
    const l = word.length - 1 - k;
    // if any letters don't match, return false
    if (word[k] !== word[l]) return false;
  }

  // return true
  return true;
}

/* 
Add your pseudocode here

iterate from the beginning to the middle
  check each letter to the correponding letter from the end
    if any letters don't match, return false
return true

*/

/*
Add written explanation of your solution here

if the first letter is the same as last letter, and the 
second letter is the same as the second to last letter 
until we reach the middle, return true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;