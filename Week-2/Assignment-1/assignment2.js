function avg(data) { 
    let x = 0;
    for (let i=0; i<data["size"]; i++){
        x +=data["products"][i]["price"];
    }
    return x/(data["size"]); 
} 

console.log( avg({ size:3, products:[ { name:"Product 1", price:100 }, 
                                      { name:"Product 2", price:700 }, 
                                      { name:"Product 3", price:250 }   
                                    ] 
                 }
                ) 
            ) // should print the average price of all products 
