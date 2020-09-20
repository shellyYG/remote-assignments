//This Session is for Clicking on the Welcome Message
let welcomemsg = document.querySelector("p.intro");
welcomemsg.addEventListener('click', () => {
    welcomemsg.textContent = 'Have a Good Time!';
});


//This Session is for the Button
let button = document.querySelector("#btn");
let row3 = document.querySelector(".row3");
let row4 = document.querySelector(".row4");

button.addEventListener('click', ()=> {
    row3.style.display = 'flex';
    row4.style.display = 'flex';
});