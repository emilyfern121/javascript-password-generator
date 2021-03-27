// A series of prompts with password criteria options display.

// Prompt 1: "How many characters would you like your password to have?" Must be at least 8 characters and no more than 128 characters.

// Prompt 2: Click OK to confirm including special characters.

// Prompt 3: Click OK to confirm numeric characters.

// Prompt 4: Click OK to confirm lowercase characters.

// Prompt 5: Click OK to confirm uppercase characters.

// Once all prompts are answered, the password should be generated based on the users input. 

// Once the password is generated and the button is clicked, the password is written on the page

// Assignment Code

var generateBtn = document.querySelector("#generate");

var passwordLength=prompt("How many characters would you like your password to have?");

if (passwordLength <= 10) {
  console.log(passwordLength);
}

var specialCharacter=confirm("Click OK to confirm including special characters.")

if (specialCharacter) {
  console.log(specialCharacter);
}

var numeric=confirm("Click OK to confirm numeric characters.");

if (numeric) {
  console.log(numeric);
}

var lowercase=confirm("Click OK to confirm lowercase characters.");

if (lowercase) {
  console.log(lowercase);
}

var uppercase=confirm("Click OK to confirm uppercase characters.");

if (uppercase) {
  console.log(uppercase);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

