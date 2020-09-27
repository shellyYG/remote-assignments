function twoSum(nums, target) {
    for (i=0; i< nums.length; i++) {
        let firstn = i;
        for (j = i+1; j <= (nums.length); j++) {
            //let secondn = firstn+j; discovered that I didnt need secondn
            output = nums[i]+nums[j];
            //console.log(output); verified output
            while (output == target) {
                let finalresult=[];
                finalresult.push(i);
                finalresult.push(j);
                return finalresult;
            } 
        }
    }
    console.log("Sorry, can't find the combination for your target.")
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
*/