// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // prompt user for password length
  var passwordLength = prompt("How many characters do you want in your password? Choose a number between 8 and 128.");

  // if user does not choose a number between 8 and 128, send them back to homepage
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128. Click Generate Password to try again.")
    passwordString = "";
    return;
  };

  // prompt user for choice of characters
  var useLowerCase = confirm("Do you want lower case letters in your password? Click OK for yes and CANCEL for no.");
  var useUppercase = confirm("Do you want upper case letters in your password? Click OK for yes and CANCEL for no.");
  var useNumbers = confirm("Do you want numbers in your password? Click OK for yes and CANCEL for no.");
  var useSymbols = confirm("Do you want symbols in your password? Click OK for yes and CANCEL for no.");

  // strings of possible characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!*$%&#@+?:;()^";
  var passwordString = "";

  // build password based on user inputs
  if (useLowerCase) {
    passwordString = passwordString + lowerCase;
  }

  if (useUppercase) {
    passwordString = passwordString + upperCase;
  }

  if (useNumbers) {
    passwordString = passwordString + numbers;
  }

  if (useSymbols) {
    passwordString = passwordString + symbols;
  }

  // alert user if they did not select any characters
  if (passwordString === "") {
    alert("You need to select some characters. Click Generate Password to try again.");
    passwordString = "";
    return;
  }

  // generate a random string
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
