// Assignment Code
var generateBtn = document.querySelector("#generate");

/* Password Content */
var content  = {
  upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowerCase: ["abcdefghijklmnopqrstuvwxyz"],
  specialChararacters: ["!@#$%^&*"],
  numberic: ["1234567890"],
  options: "",
}
//Questions that will be asked //

var length = prompt("How many Characters do you want? Min 8 Max 128");
var upper = confirm("Would you like Upper Case Letters?");
var lower = confirm("Would you like Lower Case Letters?");
var special = confirm("Would you like Special Characters?");
var num =  confirm("Would you like numbers?");

//Making sure all enough information is there//

if(length < 8 || > 128) {
  alert("Please select correct amount of Characters.");
  var length = prompt("How many Characters do you want? Min 8 Max 128");
}
else if (upper != true && lower !=true && special !=true && number !=true) {
  alert("Please select at least two varables for password, thank you.");
  var length = prompt("How many Characters do you want? Min 8 Max 128");
  var upper = confirm("Would you like Upper Case Letters?");
  var lower = confirm("Would you like Lower Case Letters?");
  var special = confirm("Would you like Special Characters?");
  var num = confirm("Would you like numbers?")
}

//Password to allow for selctions//
if (upper) {
  content.options += content.upperCase;
} 
if (lower) {
  content.options += content.lowerCase;
}
if (special) {
  content.options += content.specialChararacters;
}
if (num) {
  content.options += content.numberic;
}

//Magic happens with random password using what was selcect//
for (var 1= 0; i < length; i++) {
  content.options.charAt(Math.floor(Math.random()*content.options.length));
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);