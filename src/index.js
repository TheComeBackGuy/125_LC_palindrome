import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>125. Valid Palindrome
</h1>
<div>
LeetCode Problems</div>
`;

var isPalindrome = function (s) {
  //Initialize mutable var
  let onlyLetters = "";
  //Search through the string
  for (let i = s.length; i >= 0; i--) {
    // If the keycode represents a letter...
    if (
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
    ) {
      //...add that letter to a new string
      onlyLetters += s[i];
    }
  }
  onlyLetters = onlyLetters.toLowerCase();
  // Initialize new var to be true/false if...
  //the new string is the same forward and backward
  return onlyLetters === [...onlyLetters].reverse().join("") ? true : false;
  //Return the boolean
};

isPalindrome("A man, a plan, a canal: Panama");
