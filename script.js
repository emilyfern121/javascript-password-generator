// Assignment Code

var generateBtn = document.querySelector("#generate");

// Generate password function

function generatePassword () {

  var password = [];

  var lcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var ucase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var num = [1,2,3,4,5,6,7,8,9];

  var char = ["!","@","#","$","%","^","&","*","~"];

  var allOptions = [];

  var passwordLength=prompt("How many characters would you like your password to have?");

    if (passwordLength >= 8) {
    console.log(passwordLength);
    allOptions.push("");
    }
  
  var specialCharacter=confirm("Click OK to confirm including special characters.")
  
    if (specialCharacter) {
    console.log(specialCharacter);
    allOptions=allOptions.concat(char);
    password.push(getRandomElementFromArray(char));
    }
  
  var numeric=confirm("Click OK to confirm numeric characters.");
  
    if (numeric) {
    console.log(numeric);
    allOptions=allOptions.concat(num);
    password.push(getRandomElementFromArray(num));
    }
  
  var lowercase=confirm("Click OK to confirm lowercase characters.");
  
    if (lowercase) {
    console.log(lowercase);
    allOptions=allOptions.concat(lcase);
    password.push(getRandomElementFromArray(lcase));
    }
  
  var uppercase=confirm("Click OK to confirm uppercase characters.");
  
    if (uppercase) {
    console.log(uppercase);
    allOptions=allOptions.concat(ucase);
    password.push(getRandomElementFromArray(ucase));
    }

    for (var i=password.length; i < passwordLength; i++) {
    password.push(getRandomElementFromArray(allOptions));
    }
    return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//function generate random number
 function generateRandomNumber(maxValue) {
   var randomNumber=Math.random();

   var result=Math.floor(randomNumber * maxValue);
   return result;
 }

// function to generate random array
function getRandomElementFromArray(array) {
  var randomPosition=generateRandomNumber(array.length);
  return array[randomPosition];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

