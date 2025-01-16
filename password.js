function validate_password(passwaord) {
    let upperCase = 0;
    let symbolFound = false;
    const symbols = "`~!@#$%^&*()_-+=}{][';:/?.<<,|\"".split("");

    if (password.length < 8) {
        console.log("passwaord must be atleast 8 characters long");
    } 

    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            upperCase++;
        }
        
        for (let x of symbols) {
            if (password[i] === x) {
                symbolFound = true;
            }
        }
    }

    if (upperCase < 4) {
        return ("Password must contain atleast 4 uppercase characters");
    }

    if (!symbolFound) {
        return ("Password Must contain atleast 1 symbol");
    } 
    
    return ("Access granted");
}

const prompt = require("prompt-sync")();
let password = prompt("Enter password (atleast 8 character long): ");
console.log(validate_password(password))

