// Assignment Code
let generateBtn = document.querySelector("#generate");

// Password output variables
let lower = Array.from("abcdefghijklmnopqrstuvwxyz");
let upper = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numbers = Array.from("0123456789");
let special = Array.from("!#$%&'()*+-./:<=>?@[]^,_`{|}");
let charCount;
let passwordLength;

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Sets the initial bank of eligible characters to empty
  // let randomBank = [];
  
  // Allows the user to set the password output's character count
  let passwordLength = prompt("Please enter a value between 8 and 128 to determine the number of characters in your password:");
  
  if (passwordLength === "") {
    alert("You must enter a length for your password to proceed!");
    return;
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
    return;
  }
  
  // Allows the user to choose types of characters to include in password generation
  let lowerChar = confirm("Would you like your password to include lowercase letters?");
  let upperChar = confirm("Would you like your password to include uppercase letters?");
  let numberChar = confirm("Would you like your password to include numbers?");
  let specialChar = confirm("Would you like your password to include special characters?");

  // Prevents the user from creating a password with no character types
  if (!lowerChar && !upperChar && !numberChar && !specialChar) {
    alert("Your password must contain at least one type of character!");
    return;
  }

  // Combines the user's chosen character types into an array for randomizing
  let randomBank = [];

  if (lowerChar) {
    randomBank = randomBank.concat(lower);
  }
  
  if (upperChar) {
    randomBank = randomBank.concat(upper);
  }

  if (numberChar) {
    randomBank = randomBank.concat(numbers);
  }

  if (specialChar) {
    randomBank = randomBank.concat(special);
  }

  // Generates characters from randomBank and outputs the generated password
  let output = [""];
  for (let i = 0; i < passwordLength; i++) {
    let character = randomBank[Math.floor(Math.random() * passwordLength)];
    output.push(character)
  }
  return output.join("")
}
