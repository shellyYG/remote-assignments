function ajax(src, callback){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            console.log("/1 Shelly log");
            callback(xhr.responseText); //callback == render // data == xhr.response
        }
    }
    xhr.open('GET',src);
    xhr.send();
}

function render(data){  
    const transformeddata = JSON.parse(data); //change JSON to real JS objects
    console.log(transformeddata);
    let ull = document.createElement('ul');
    
    transformeddata.forEach(function (tt) {
        var li = document.createElement('li');
        li.textContent = tt["name"]+": price "+tt["price"]+"/ 賣點："+tt["description"];
        ull.appendChild(li);
    });
    var output = document.querySelector('#outputhere');
    output.appendChild(ull);
    //outputhere.innerHTML = transformeddata[i]["name"];    //replace outputhere id section with data               
}

let src = "https://cwpeng.github.io/live-records-samples/data/products.json"

ajax(src, function(response){
    render(response);
});

