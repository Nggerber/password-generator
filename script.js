//varaible for the button

var btn = document.getElementById("btn")

// variable for the password to be displayed

var pass = document.getElementById("password")

//arrays for the password elements

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="] 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// array that combines upper and lower case letters

var passwordPossibilties = []

//run password prompts on button click

btn.onclick = function() {

var passwordLength = prompt("How many characters do you want your' password to be?");    
console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be less that 128 characters or greater than 8 characters")
    }
    else {
            // receive all of the user information

            var uppercaseChar = confirm("Would you like to use uppercase letters?");
            console.log(uppercaseChar);

            //if statement to add upper case charaters to the password
            if (uppercaseChar) {
                passwordPossibilties = passwordPossibilties.concat(upper);
            }

            var numbersChar = confirm("Would you like to use number?");
            console.log(numbersChar);

            //if statement to add numbers to the password

            if (numbersChar) {
                passwordPossibilties = passwordPossibilties.concat(number);
            }

            var specialChar = confirm("Would you like to use special characters?");
            console.log(specialChar);

            //if statement to add special characters to the password

            if (specialChar) {
                passwordPossibilties = passwordPossibilties.concat(special);
            }

            var lowerChar = confirm("Would you like to use lowercase letters?");
            console.log(lowerChar)

             // if statement to add lower case characters to the array
             
            if (lowerChar) {
                passwordPossibilties = passwordPossibilties.concat(lower);
            }

            var result = ""

            // run a for loop to run the password generator
            for (i = 0; i < parseInt(passwordLength); i++) {
                var pass = passwordPossibilties [Math.floor(Math.random() * passwordPossibilties.length)];
                console.log(pass)
                //combining our blank results variable with pass

                result = result.concat(pass)
                
                
               
            }

            console.log("resulting password", result)
            alert(result)

                }}
                

        