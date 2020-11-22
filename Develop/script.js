//global variables

var lowerLetter = "acdefghijklmnopqrstuvwxyz"
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var theNumbers = "0123456789"
var specialC = "!@#$^&%*()+=-[]{}|:<>?,.';"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  // WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters
  var promptOne = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters."))
  if(!promptOne){
    alert("You must enter a number between 8 and 128")
    generatePassword()
  }
  else if(promptOne < 8 || promptOne >128 ){
    alert("You must enter a number between 8 and 128")
    generatePassword()
  }
  else {
  var askUpper = prompt("Would you like to include uppercase letters in the password? Please enter Yes or No.")
  var askLower = prompt("Would you like to include lowercase letters in the password? Please enter Yes or No.")
  var askNumbers = prompt("Would you like to include numbers in the password? Please enter Yes or No.")
  var askSpecial = prompt("Would you like to include special characters in the password? Please enter Yes or No.")
  var askUpper2 = askUpper.toLocaleLowerCase()
  var askLower2 = askLower.toLocaleLowerCase()
  var askNumbers2 = askNumbers.toLocaleLowerCase()
  var askSpecial2 = askSpecial.toLocaleLowerCase()
  }

  console.log(askUpper, askLower, askNumbers, askSpecial, askUpper2, askLower2, askNumbers2, askSpecial2)
}



// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
