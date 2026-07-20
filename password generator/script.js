const password= document.querySelector(".enter input");
const nofchar=document.querySelector(".numbers input");

function generate(){
    let length=parseInt(nofchar.value);
let allCharacters= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-;'<>"

let newPassword="";

for (let i=0; i<length; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword +=allCharacters[randomNumbers];
}

password.value = newPassword;
}

function copypsw() {
    navigator.clipboard.writeText(password.value);
    alert("password was copied");
}
