function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(function() {
        x = n1+n2;
        callback(x); //callback in callback
    }, delayTime);
    
}

console.log("Below are results!");

delayedResult(4, 5, 3000, function(result) { console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 10000, function(result) { console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds