//Return true if the given string is a palindrome. Otherwise, return false.
//remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.


function palindrome(str) {
  const newStr = str.replace(/[_\W]/g, '');

  return isPalindrome(newStr);
}

function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

palindrome("eye");
