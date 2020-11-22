

//global variables

var lowerLetter = ["a","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var theNumbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialC = ["!","@","#","$","^","&","%","*","(",")","+","=","-","[","]","{","}","|",":","<",">","?",",",".",",'",";"]

var askUpper2;
var askLower2;
var askNumbers2;
var askSpecial2;

var passUpper;
var passLower;
var passNumber;
var passSpecial;

var indexUpper = Math.floor(Math.random() * lowerLetter.length);
var indexLower = Math.floor(Math.random() * upperLetter.length);
var indexNumber = Math.floor(Math.random() * theNumbers.length);
var indexSpecial = Math.floor(Math.random() * specialC.length);

//global functions



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
    function askUpperFunk(){
      var askUpper = prompt("Would you like to include uppercase letters in the password? Please enter Yes or No.")
      askUpper2 = askUpper.toLocaleLowerCase()
      if(askUpper2 != "yes" && askUpper2 != "no"){
        alert("You must select enter Yes or No")
        askUpperFunk()
      }
    } 
    function askLowerFunk(){
      var askLower = prompt("Would you like to include lowercase letters in the password? Please enter Yes or No.")
      askLower2 = askLower.toLocaleLowerCase()
      if(askLower2 != "yes" && askLower2 != "no"){
        alert("You must select enter Yes or No")
        askLowerFunk()
      }
    }
    function askNumberFunk(){
      var askNumbers = prompt("Would you like to include numbers in the password? Please enter Yes or No.")
      askNumbers2 = askNumbers.toLocaleLowerCase()
      if(askNumbers2 != "yes" && askNumbers2 != "no"){
        alert("You must select enter Yes or No")
        askNumberFunk()
      }
    }
    function askSpecialFunk(){
      var askSpecial = prompt("Would you like to include special characters in the password? Please enter Yes or No.")
      askSpecial2 = askSpecial.toLocaleLowerCase()
      if(askSpecial2 != "yes" && askSpecial2 != "no"){
        alert("You must select enter Yes or No")
        askSpecialFunk()
      }
    }
    askUpperFunk()
    askLowerFunk()
    askNumberFunk()
    askSpecialFunk()
  }

  if (askUpper2 === "no" && askLower2 === "no" && askNumbers2 === "no" && askSpecial2 === "no"){
    alert("You must select Yes for at least one of the criteria.")
    generatePassword()
  }

  // else if () {

  // }


  
  
}


