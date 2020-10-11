// Assignment code here

  var allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];   
  var nonZeroDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];   
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   
  var lowerAndUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var characters = ['@', '#', '$', '%', '<', '^', '<', '!', '?'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordString = [];

  var size = prompt("What is the length?");
  size = Number.parseInt(size, 10);
  if (Number.isNaN(size)) {
    alert("Invalid length. Please enter a valid number between 8 and 128.");
  }

  if (size < 8 || size > 128) {
    alert("Invalid length. Please select a value between 8 and 128.");
    return '';
  }
  
  console.log('size', size, typeof size);

  var letterCase = prompt("Do you want your password to have upper case or lower case letters? \nEnter 'upper', 'lower' or 'both'.");
  if (letterCase === "lower") {
    passwordString = passwordString.concat(lowercaseLetters);
  }
  else if (letterCase === "upper") {
    passwordString = passwordString.concat(uppercaseLetters);
  }
  else if (letterCase === "both") {
    passwordString = passwordString.concat(lowerAndUpper);
  }
  else {
    alert("Invalid input. Please enter Enter 'upper', 'lower' or 'both'.");
  }

  var numericCharacter = confirm("Do you want you password to have numbers?");
  if (confirm(numericCharacter)) {
    passwordString = passwordString.concat(allDigits);
  }
  
  var specialCharacter = confirm("Do you want you password to have special characters?");
  if (confirm(specialCharacter)) {
    passwordString = passwordString.concat(characters);
  }

  console.log(passwordString);

  var generated = "";

  for (var i = 0; i < size; i++) {
    generated += passwordString[Math.floor(Math.random() * passwordString.length)]
  }

  return generated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
