const express = require('express');
const app = express();

app.set('view engine', 'pug');

function ajax(src, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            let restext = JSON.parse(xhr.responseText);
            callback(restext);
            console.log("xhr request is ready!");
        }
        console.log("After xhr onreadystate!")
    }
    xhr.open('GET',src);
    xhr.send();
    console.log("After xhr.send!")
}

let src = "https://cwpeng.github.io/live-records-samples/data/products.json";

function render(data){
    app.get('data', (req,res) => {
        console.log("Hi!! Shelly on the go!");
        res.render('hw2');
    })
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ render(response); });


// app.listen(4000, () => {	
// 	console.log('The application is running on localhost:4000!')
// });	