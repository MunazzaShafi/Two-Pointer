/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let i=0;
    let j=1;

    while (i<nums.length && j<nums.length){
        if(nums[i]%2==0 ){
            i=i+2;
        } 
        else if(nums[j]%2!==0 ){
            j=j+2;
        }
        else {
    [nums[i], nums[j]] = [nums[j], nums[i]];

    i=i+2;
    j=j+2;
}
    }

 return nums;
};

console.log(sortArrayByParityII([4,2,5,7]));