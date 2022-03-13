let allChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Æ', 'Ø', 'Å', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '@']

let formInput = document.getElementById('inputLength');

const generatePass = () => {

    let passOne = "";
    let passTwo = "";
    let passThree = "";
    let passFour = "";

    let password = document.getElementById("exampleOne");
    let password2 = document.getElementById("exampleTwo");
    let password3 = document.getElementById("exampleThree");
    let password4 = document.getElementById("exampleFour");

    let formNumber = formInput.value;
    let error = document.getElementById('errorMessage')

    if (isNaN(formNumber)) {
        error.textContent = `You can only type numbers here!`;

    } else if (formNumber <= 5) {
        error.textContent = `Paswoord must be between 5-22 characters long!`

    } else if (formNumber >= 22) {
        error.textContent = `Paswoord must be between 5-22 characters long!`
    }
    else {
        for (var i = 0; i < formInput.value; i++) {
            passOne += allChars[Math.floor(Math.random() * allChars.length)];
            passTwo += allChars[Math.floor(Math.random() * allChars.length)];
            passThree += allChars[Math.floor(Math.random() * allChars.length)];
            passFour += allChars[Math.floor(Math.random() * allChars.length)];
        }
        password.textContent = passOne;
        password2.textContent = passTwo;
        password3.textContent = passThree;
        password4.textContent = passFour;

        error.textContent = `Great! See your four generated password down here!0d5æ.04`

    }



}

