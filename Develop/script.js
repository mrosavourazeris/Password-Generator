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
  // promptOne is asking the user how long they would like their password to be 
  var promptOne = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters."))
  
  if(!promptOne){
    //if promptOne is not an integer then an alert will pop up notifying the user that they must pick a number between 8 and 128
    alert("You must enter a number between 8 and 128")
    //after the alert a confirm prompt will generate asking user if they want to cancel 
    var askCancel = confirm("Would you like to cancel?")
    //if askCancel is false, then the function generatePassword will end
    if (askCancel === false){
      return;
    }
    //if askCancel is True, the function generatePassword will run again from the beginning
    else{
    generatePassword()}
  }
  
  else if(promptOne < 8 || promptOne >128 ){
    //if the number picked is lower than 8 or higher than 128, an alert will pop up notifying the user that they must pick a number between 8 and 128
    alert("You must enter a number between 8 and 128")
    var askCancel = confirm("Would you like to cancel?")
    //if askCancel is false, then the function generatePassword will end
    if (askCancel === false){
      return;
    }
    //if askCancel is True, the function generatePassword will run again from the beginning
    else{
    generatePassword()}
  }
  else {
  var askUpper = confirm("Would you like to include uppercase letters in the password?)
  var askLower = confirm("Would you like to include lowercase letters in the password?)
  var askNumbers = confirm("Would you like to include numbers in the password?)
  var askSpecial = confirm("Would you like to include special characters in the password?)
  var askUpper2 = askUpper.toLocaleLowerCase()
  var askLower2 = askLower.toLocaleLowerCase()
  var askNumbers2 = askNumbers.toLocaleLowerCase()
  var askSpecial2 = askSpecial.toLocaleLowerCase()
  }

  console.log(promptOne, askUpper, askLower, askNumbers, askSpecial, askUpper2, askLower2, askNumbers2, askSpecial2)
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
