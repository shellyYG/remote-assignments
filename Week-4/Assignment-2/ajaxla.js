let button = document.querySelector("#btn");

function ajax(src, callback){
    //code here
}

function render(data){
    //use document.createElement() and appendChild()
}


ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
});



button.addEventListener('click', ()=> {
    
    ss = document.querySelector('#addinput').value; //1.
    ss = parseInt(ss); //2.
    let xhr = new XMLHttpRequest(); //3.
    
    xhr.responseType = 'json';//4. //so we don't need to parse JSON later
    
    xhr.onreadystatechange = function() {
        //5. //8.
        if(xhr.readyState === 4) {
            const data = xhr.response; //9.
            console.log(data); //10.
        }
    };
    
    xhr.open('GET','http://localhost:3000/getData?number='+ss); //6.
    xhr.send(); //7.
   
});
