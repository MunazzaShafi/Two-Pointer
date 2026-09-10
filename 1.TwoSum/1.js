var twoSum = function(nums, target) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        arr.push([nums[i], i]);
    }


    arr.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let sum = arr[left][0] + arr[right][0];

        if (sum === target) {
         
            return [arr[left][1], arr[right][1]];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));      