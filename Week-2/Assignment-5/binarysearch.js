function binarySearchPosition(numbers, target) { 
    let position = "sorry not found";
    if (numbers.length == 1) { //if there is only 1 element
        if (target == numbers[0]) { //if that 1 element equal to target
            position = 0;
        } else {
            position = "sorry not found";  //if not even that 1 element equal to target
        }
    } else {                  //if there is more than 1 element
        //define bottom
        var bottom;
        
        //define middle
        var middle;
        if (numbers.length%2 == 0) { //means there are even number of elements
            middle = numbers.length/2-1;
        } else {                     //means there are odd number of elements
            middle = (numbers.length+1)/2-1;
        }
        //define a Mid for recursive cal.
        var Mid;

        //define top
        var top=numbers.length;

        //redefine number array
        if (target==numbers[middle]){ //target equal to middle element
            position = middle;
        } else if (target > numbers[middle]) { //search right side of the array
            bottom = middle+1; //does not need to incl. middle because the target was not equal to middle element
            top = numbers.length; 
            numbers = numbers.slice(bottom,top);
            Mid = middle+1;
            position = Mid + binarySearchPosition(numbers, target);
        } else { //search left side of the array
            bottom = 0;
            top = middle; //incl. middle because slice does not incl. upper bound
            numbers = numbers.slice(bottom,top);
            position = binarySearchPosition(numbers, target);
        }
    }
    if (typeof(position) !== "number") {
        position = "sorry not found";
    } else {
        position;
    }

    return position;
} 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
console.log( binarySearchPosition([1, 2, 5, 6, 7], 8) ); //should print "sorry not found"

// function findPosition(numbers, target) { 
//     let x = -1;
//     for (let i=0; i<numbers.length; i++) {
//         if (numbers[i]==target) {
//             x=i;
//             break;
//         } else {
//             x=x;
//         }
//     } 
//     return x;
// } 

