const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.getElementById("generate-btn")
const password1 = document.getElementById("pass-1")
const password2 = document.getElementById("pass-2")



// generateBtn.addEventListener("click", function() {
//     genBtn()
// })

function genBtn() {
    if (password1.textContent.length === 0 && password2.textContent.length === 0) {
        for (i = 0; i < 15; i++) {
            //password 1
            let randomChar1 = Math.floor(Math.random()*characters.length)
            password1.textContent += characters[randomChar1]
            //password 2
            let randomChar2 = Math.floor(Math.random()*characters.length)
            password2.textContent += characters[randomChar2]
        }
    } else {
        erase()
    }
}

function erase() {
    password1.textContent = []
    password2.textContent = []
    genBtn()
}

