// Write a function to check if a string is a palindrome
function isPalindrome(str) {
    const str1 = str.toLowerCase();  // assuming case insensitivity
    let low = 0;
    let high = str1.length - 1;
    while (low < high) {
      if (str1[low] !=str1[high]) {
        return false;
      }
      low++;
      high--;
    }
    return true;
  }
  console.log(isPalindrome("deified"));  
  console.log(isPalindrome("hello"));  
  