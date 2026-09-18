/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let smaller = [];
    let equal = [];
    let greater = [];
    let i=0;

    while(i<nums.length){
        if(nums[i]<pivot){
            smaller.push(nums[i]);
        }
        else if(nums[i]==pivot){
            equal.push(nums[i]);
        }
        else {
            greater.push(nums[i]);
        }
        i++;
    }
    return [...smaller, ...equal, ...greater];
};

console.log(pivotArray([9,12,5,10,14,3,10],10));