// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


 // TO DO
 // prompt: What is the length? >= 8 && <= 128
 // confirm: character types 
 //   lowercase
 //   uppercase
 //   numeric
 //   special characters
 //   generate a password 
function generatePassword() {
  var size = prompt("What is the length?");
  console.log('size', size, typeof size);

  var caseLetters = prompt("Do you want your password to have upper case or lower case letters?");
  console.log('caseLetters', caseLetters, typeof caseLetters);
  
  var isUpperCase = confirm("Press okay to have upper case letters.");
  console.log('isUpperCase', isUpperCase, typeof isUpperCase);


  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
