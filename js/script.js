const input = document.getElementById("input");
const copy = document.querySelector(".copy");
const left = document.querySelector(".left");
const number = document.querySelector(".number");
const right = document.querySelector(".right");

let passwordValue = 8;
const passwordGenerator = () =>{
    let passwordLength = passwordValue;
    let password = "";
    let signs = "1234567890?><:}{+_)(*&^%$#@!~?><abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXIZ";

    for (let i = 0; i < passwordLength; i++) {
        password += signs.charAt(Math.floor(Math.random() * signs.length));
    }
    input.value = password;
}

right.addEventListener("click", () => {
    if(passwordValue <= 15){
        passwordValue++
    }
    number.textContent = passwordValue;
})
left.addEventListener("click", () => {
    if(passwordValue >= 9){
        passwordValue--
    }
    number.textContent = passwordValue;
});

const copyText = () => {
    if(input.value){
        navigator.clipboard.writeText(input.value).then(() => {
            notification();
        });
    }
}

const notify = document.querySelector(".notification");
const notification = () => {
    const note = document.querySelector(".note");
    const noteText = `Password is successfully copied.`
    notify.classList.add("active");
    lineCount();
    note.textContent = noteText;
    setTimeout(() => {
        notify.classList.remove("active");
    },1500);
}

const lineCount = () => {
    let lineWidth;
    let value = 0;
    const line = document.querySelector(".line");
    lineWidth = setInterval(() => {
        value += 1;
        line.style.width = value +"px"
        if(value >= 200){
            clearInterval(lineWidth);
        }
    }, 8);
}
