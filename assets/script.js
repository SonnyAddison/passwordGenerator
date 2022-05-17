// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

/* Password Content */
var content  = {
  upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowerCase: ["abcdefghijklmnopqrstuvwxyz"],
  specialChararacters: ["!@#$%^&*"],
  numberic: ["1234567890"],
  options: "",
}

// Write password to the #password input
function writePassword() {
   var random = "";

   //Questions that will be asked //
   let length = prompt("How many Characters do you want? Min 8 Max 128");
   if(length < 8 || length > 128) {
   alert("Please select correct amount of Characters.");  
   let length = prompt("How many Characters do you want? Min 8 Max 128");
   }
  
  let upper = confirm("Would you like Upper Case Letters?");
  let lower = confirm("Would you like Lower Case Letters?");
  let special = confirm("Would you like Special Characters?");
  let num =  confirm("Would you like numbers?");

  //Making sure all enough information is there//
  if (upper != true && lower !=true && special !=true && num !=true) {
    alert("Please select at least two varables for password, thank you.");
    let upper = confirm("Would you like Upper Case Letters?");
    let lower = confirm("Would you like Lower Case Letters?");
    let special = confirm("Would you like Special Characters?");
    let num =  confirm("Would you like numbers?");
  }

    //Password to allow for selctions//
    if (upper && lower && special && num) {
      content.options += content.upperCase + content.lowerCase + content.specialChararacters + content.numberic; 
    } 
    else if (!upper && lower && special && num) {
      content.options += content.lowerCase + content.specialChararacters + content.numberic; 
    }
    else if (upper && !lower && special && num) {
      content.options += content.upperCase + content.specialChararacters + content.numberic;
    }
    else if (upper && lower && !special && num) {
      content.options += content.upperCase + content.lowerCase + content.numberic;
    }
    else if (upper && lower && special && !num) {
      content.options += content.upperCase + content.lowerCase + content.specialChararacters; 
    } 
    
 //Magic happens with random password using what was selcect//
 for (var i = 0; i < length; i++) {
   random += content.options.charAt(Math.floor(Math.random()*content.options.length));
 } 
 password.value = random 
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);