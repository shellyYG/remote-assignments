const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/hw2', (req,res) => {
    console.log("Hi!! Shelly on the go!");
    res.render('hw2');
})


// function ajax(src, callback){
//     callback();
// }

// function render(data){
//     addItemButton.addEventListener('click', () => {
//         let li = document.createElement('li');		
//         let ul = document.getElementsByTagName('ul')[0];		
//         li.textContent = addItemInput.value; 		
//         ul.appendChild(li); //Here you insert the element to DOM!		
//         addItemInput.value = ''; //this clears the input after the input is submitted		
//     });			
// }

// ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ render(response);
    
// }); // you should get product information in JSON format and render data in the page

app.listen(4000, () => {	
	console.log('The application is running on localhost:4000!')
});	