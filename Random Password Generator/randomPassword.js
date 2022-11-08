const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "01234656789";
const symbols = "`~!@#$%^&^*()-_+={}[];:'<>?/";

class Password {
    constructor(length) {
        this.length = length;
    }
    generatePassword(length) {
        let generatedPassword = '';
        for (var i = 0; i < length; i++) {
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        console.log(generatedPassword);
        document.getElementById('password').value = generatedPassword;
    }
    generateStrongPassword(length) {
        var chars = lower + upper + numbers + symbols;
        let generatedPassword = '';
        for (var i = 0; i < length; i++) {
            generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById('password').value = generatedPassword;
        console.log(generatedPassword);
    }
    generateFunnyPassword() {
        var funnyPasswords = [
                "password",
                "incorrect",
                "123456789",
                "143",
                "12345678",
                "hello",
                "i love you",
                "hello world",
                "iphone",
                "admin",
                "user",
                "santhu",
                "welcome",
                "india",
                "numbers",
                "xiaomi",
                "nenu chepanu",
                "shadow",
                "sunshine",
                "111111",
                "mustang",
                "dragon",
                "cheese",
                "qazwsx",
                "11111111",
                "password",
                "1234567890",
                "123456",
                "654321",
                "maggie",
                "princess",
                "killer",
                "asdfgh",
                "pass",
                "amanda",
                "987654321",
                "123321",
                "baseball",
                "asshole",
                "fuckyou",
                "buster",
                "love",
                "chelsea",
                "jennifer",
                "access",
                "fuck",
                "letmein",
                "matrix",
                "summer",
                "robert",
                "computer",
                "freedom",
                "1234",
                "joshua",
                "austin",
                "1111",
                "george",
                "777777",
                "hockey",
                "131313",
                "tigger",
                "aaaaaa",
                "696969",
                "iloveyou",
                "yankees",
                "666666",
                "1234567",
                "charlie",
                "dallas",
                "monkey",
                "123456789",
                "qwerty",
                "abc123",
                "12345678",
                "nicole",
                "thunder",
                "555555",
                "pussy",
                "jordan",
                "hunter",
                "matthew",
                "taylor",
                "000000",
                "starwars",
                "112233",
                "biteme",
                "2000",
                "andrew",
                "daniel",
                "123123",
                "ginger",
                "superman",
                "pepper",
                "minecraft",
                "159753",
                "zxcvbn",
                "michelle",
                "ranger",
                "1qaz2wsx",
                "121212",
                "thomas",
                "6969",
                "soccer",
                "ashley",
                "fuckme",
                "harley",
                "qwertyuiop",
                "7777777",
                "football",
                "batman",
                "master",
                "michael",
                "jessica",
                "zxcvbnm",
                "trustno1",
                "12345",
                "123qwe",
                "klaster"
        ]
        document.getElementById('password').value = funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];
        console.log(funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)]);
    }
}

const password = new Password();
function fun() {
    const passLen = document.getElementById('n1').value;
    const btn = document.getElementById('generate');
    const num = document.getElementById('numbers');
    const funny = document.getElementById('funnypassword');
    const strong = document.getElementById('strongpassword');
    if(passLen.length == 0 && funny.checked == false)
        alert("please Enter length");
    else if (parseInt(passLen) < 1 || parseInt(passLen) > 20)
        alert("Enter password length between 1 and 20 both inclusive");
    if (num.checked == true)
        btn.addEventListener('click', password.generatePassword(passLen));
    else if (funny.checked == true)
        btn.addEventListener('click', password.generateFunnyPassword());
    else if (strong.checked == true)
        btn.addEventListener('click', password.generateStrongPassword(passLen))
    else
        alert("please select type of password");
}



