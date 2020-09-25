let button = document.querySelector("#btn");
var ss =10;

button.addEventListener('click', ()=> {
    ss = document.querySelector('#addinput').value;
    ss = parseInt(ss);

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';//so we don't need to parse JSON later

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            const data = xhr.response;
            console.log(data);
        }
    };

    xhr.open('GET','http://localhost:3000/getData?number='+ss);

    xhr.send();
});
//Why is ss still 10, not changed by the EventListener? QQ

