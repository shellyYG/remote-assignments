const express = require('express');
const app = express();

app.set('view engine', 'pug');

// app.get('/hw2', (req,res) => {
//     console.log("Hi!! Shelly on the go!");
//     res.render('hw2');
// })
// function ajax(src, callback){
//     callback();
// }

function render(data){
    res.render(data, => {
        f
    })
    // let welcomemsg = document.querySelector("title.intro");
    // welcomemsg.addEventListener('click', () => {
    //     welcomemsg.textContent = 'Have a Good Time!';
    // });			
}

render();

app.get('/test', render);


//ajax("/hw2", render);//function(response){ render(response);
    
//}); // you should get product information in JSON format and render data in the page

app.listen(4000, () => {	
	console.log('The application is running on localhost:4000!')
});	