let button = document.querySelector("#btn");
var ss =10;

button.addEventListener('click', ()=> {
    //1. console.log("hi beginner") 
    ss = document.querySelector('#addinput').value;
    ss = parseInt(ss);
    //2. console.log(typeof ss)

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';//so we don't need to parse JSON later

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            const data = xhr.response;
            console.log(data); //6.
            //7. console.log("Inside xhr after data");
        }
    };
    //3. console.log(ss)
    xhr.open('GET','http://localhost:3000/getData?number='+ss);
    //4. console.log("after open");
    xhr.send();
    //5. console.log("after send");
});



