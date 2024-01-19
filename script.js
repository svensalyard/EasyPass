// Assignment code here
function generatePassword() {

  //declares the main variables for the function
  //undeclared for the user to then choose length  
  chars = "";

  //Undefined, final password output, needs to be generated first
  let randPassword = "";

  // Prompts the user for a password length between 8 and 128 for maximum security.
  let length = window.prompt("Please enter your chosen password length. (8 - 128 characters)");
  if (length >= 8 && length < 129) {
    
    // Following section prompts for password character choices, if yes returns boolean true
    // and adds it to the selection, if no returns boolean false and does not add it
    // then moves on to the next question
    let getNumber = window.confirm("Would you like to include numbers in the password?");
    if (getNumber) {
      chars += "1234567890";
    };
    
    let getSymbol = window.confirm("Would you like to include symbols in the password?");
    if (getSymbol) {
      chars += "!@#$%&~_-+=()*{}[]|'`<>?/";
    };

    let getLowerCase = window.confirm("Would you like to include lowercase letters in the password?");
    if (getLowerCase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    };

    let getUpperCase = window.confirm("Would you like to include uppercase letters in the password?");
    if (getUpperCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    // End selecction
    console.log(chars)
    // Forces user to select at least one option by checking each one
    if (!getNumber && !getSymbol && !getLowerCase && !getUpperCase) {
      window.alert("Please select at least one option. Please try again.");
    };
		
    // Takes chosen chracters and makes a random selection based on length
    // then generates the password


    for (let i = 0; i < length; i++) {
			randPassword += chars[Math.floor(Math.random() * chars.length)];
			}; 
			//ouputs the password for the writePassword function to take and display in the text area
			return randPassword
	
	}

  // Warns user that the password length is incorrect, they need to try again.
  else {
    window.alert("Error: Length must be between 8 - 128 characters.");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
