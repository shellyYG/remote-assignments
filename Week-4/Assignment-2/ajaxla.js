function ajax(src, callback){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            console.log("/1 Shelly log");
            console.log(xhr.responseText);
            callback(xhr.responseText); //callback == render // data == xhr.response
        }
    }
    xhr.open('GET',src);
    xhr.send();
}

function render(data){  
    outputhere.innerHTML = data;    //replace outputhere id section with data               
}

let src = "https://cwpeng.github.io/live-records-samples/data/products.json"

ajax(src, function(response){
    render(response);
});

