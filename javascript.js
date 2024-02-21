let form = document.querySelector("form"),
    inputEmail = document.querySelector("input"),
    succes = document.querySelector(".succes"),
    dismis = document.querySelector(".dismiss"),
    main = document.querySelector("main"),
    error = document.querySelector(".error"),
    outputEmail=document.querySelector(".emailoutput")
flag = true;
const emailREGEX = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorchecker(inputEmail.value);
    if (flag) {
        outputEmail.innerHTML=inputEmail.value;
        succes.style.display = "flex";
        main.style.display = "none";
    }
})
dismis.addEventListener("click", () => {
    location.reload();
})
function errorchecker(email) {
    flag = true;
    if (email.trim()=== "") {
        inputEmail.classList.add("eror");
        error.innerHTML = "email can't be empty";
        flag = false
    }
    else if (!emailREGEX.test(email)) {
        inputEmail.classList.add("eror");
        error.innerHTML = "invalid email";
        flag = false
    }
    else {
        console.log("i am called");
        inputEmail.classList.remove("eror");
        error.innerHTML= "";
    }
}