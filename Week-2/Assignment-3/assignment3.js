function count(input) { 
    let result = {};
    let placeholders = []; //placeholder will not be at output, but is created to be used in a condition
    for (i=0; i<input.length; i++) {
        keys=input[i]; //when i=0 input[0]='a'--> keys='a'
        if (placeholders.indexOf(input[i]) == -1) { //if the char doesnt exists
            placeholders.push(input[i]); //add the char to the list
            result[keys] = 1;//initiate a key-value pair
        } else {
            placeholders=placeholders; //don't add any char
            result[keys] +=1;
        }
    }
    return result;
} 
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']; 
console.log(count(input1));  // should print {'a':3, 'b':1, 'c':2, ‘x':1} 


function groupByKey(input) { 
    let result = {};
    let placeholders = []; //placeholder will not be at output, but is created to be used in a condition
    for (i=0; i<input.length; i++) {
        rkeys=input[i]["key"]; //
        if (placeholders.indexOf(input[i]["key"]) == -1) { //if the char doesnt exists
            placeholders.push(input[i]["key"]); //add the char to the list
            result[rkeys] = input[i]["value"];//initiate a key-value pair
        } else {
            placeholders=placeholders; //don't add any char
            result[rkeys] += input[i]["value"];
        }
    }
    return result;
} 
let input2 = [{key: 'a', value: 3},
                {key: 'b', value: 1},
                {key: 'c', value: 2},
                {key: 'a', value: 3},
                {key: 'c', value: 5} 
]


console.log(groupByKey(input2));  // should print {'a':6, 'b':1, ‘c’:7}
//success!! :D :D <3 <3
