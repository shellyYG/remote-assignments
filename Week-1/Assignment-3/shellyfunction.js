//1. countAandB: count how many ‘a’ and ‘b’ letters in the given input 
///and return the total number.
//2. toNumber: convert English letter to number, let ‘a’ to be 1
///, ‘b’ to be 2 and so on.
//In both questions, you will only get 
////‘a’, ‘b’, ‘c’, ‘d’ or ‘e’ in the input array.





function countAandB(input) {
    var answer =0;
    for (var i = 0; i <input.length; i++) {
        if (input[i] === "a" || input[i] === "b") {
            answer +=1;
        } else {
            answer +=0;
        }
    }
    return answer;
    }
function toNumber(input) {
    var matchingdic = {
        "a":"1",
        "b":"2",
        "c":"3",
        "d":"4",
        "e":"5",
        "f":"6",
        "g":"7",
        "h":"8",
        "i":"9",
        "j":"10",
        "k":"11",
        "l":"12",
        "m":"13",
        "n":"14",
        "o":"15",
        "p":"16",
        "q":"17",
        "r":"18",
        "s":"19",
        "t":"20",
        "u":"21",
        "v":"22",
        "w":"23",
        "x":"24",
        "y":"25",
        "z":"26"
    }
    var listing = [];
    for (var i = 0; i <input.length; i++) {
        x = input[i];
        y = matchingdic[x]
        listing.push(y);
        }
    return listing;
    }
    
    

    }
    let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
    console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
    console.log(toNumber(input1); // should print [1, 2, 3, 1, 3, 1, 3]
    let input2 = ['e', 'd', 'c', 'd', 'e'];
    console.log(countAandB(input2)); // should print 0
    console.log(toNumber(input2); // should print [5, 4, 3, 4, 5]