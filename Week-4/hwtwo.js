const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.set('view engine', 'pug');

function ajax(src, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.state ===200){
            console.log("/1");
            callback(xhr.responseText); //ajax calls the callback and callback use the restext  
            console.log("/2");
        }
        console.log("/3")
    }
    xhr.open('GET',src);
    xhr.send();
    console.log("/4")
}

let src = "https://cwpeng.github.io/live-records-samples/data/products.json";

function render(data){
    data.jsonp(obj)
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response); 
});


// app.listen(4000, () => {	
// 	console.log('The application is running on localhost:4000!')
// });	