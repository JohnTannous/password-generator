// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var choiceArray = [];
var specialCharacter = ['!','@','#','$','%','&','*','<','>','?','[',']','/','(',')',];
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompt = passPrompt() 
    var passwordText = document.querySelector("#password");

    if (correctPrompt){
        var passwordGen = generatePassword();
        passwordText.value = passwordGen;
    } else {
        passwordText.value = "";
    }
    
  
}

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
    }
    return password;
}

function passPrompt(){
    choiceArray = [];

    characterLength = parseInt(prompt ("How many characters would you like the password to be? (8-128 characters)"));
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128 ) {
        alert("Character length must be a number between 8 - 128. Please try again.");
        return false;
    }
    
    if (confirm("Would you like the password to contain lowercase letters?")) {
        choiceArray = choiceArray.concat(lowercaseArray);
    }

    if (confirm("Would you like the password to contain uppercase letters?")) {
        choiceArray = choiceArray.concat(uppercaseArray);
    }
    if (confirm("Would you like the password to contain special characters?")) {
        choiceArray = choiceArray.concat(specialCharacter);
    }
    if (confirm("Would you like the password to contain numbers?")) {
        choiceArray = choiceArray.concat(numberArray);
    }
    return true;

}