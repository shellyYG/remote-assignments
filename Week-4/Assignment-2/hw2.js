const express = require('express');
const app = express();

app.get('/sample', (req,res) => {
    if (req.cookies.cookiect) {
        console.log("嗨妳好，如果cookie的確存在，則我會出現");
        res.render('myName',{customername: req.cookies.cookiect});
    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('myName',{customername: req.cookies.cookiect});
        //creates the query string on/trackName in URL
    }
})


function ajax(src, callback){
    callback();
}

function render(data){
    addItemButton.addEventListener('click', () => {
        let li = document.createElement('li');		
        let ul = document.getElementsByTagName('ul')[0];		
        li.textContent = addItemInput.value; 		
        ul.appendChild(li); //Here you insert the element to DOM!		
        addItemInput.value = ''; //this clears the input after the input is submitted		
    });			
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ render(response);
    
}); // you should get product information in JSON format and render data in the page

app.listen(4000, () => {	
	console.log('The application is running on localhost:4000!')
});	