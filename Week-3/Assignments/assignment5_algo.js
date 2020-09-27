function twoSum(nums, target) {
    for (i=0; i< length; i++) {
        let firstn = i;
        for (j = 0; j < (length-firstn); j++) {
            let secondn = firstn+j;
            output = nums[i]+nums[j];
            //console.log(output); verified output
            while (output == target) {
                let finalresult=[];
                finalresult.push(i);
                finalresult.push(j);
                return finalresult;
            } else {
                console.log("No result!");
            }
        }
    }
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
*/