var rotate = function(nums, k) {
    k = k % nums.length;

    function reverse(left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    // Reverse the whole array
    reverse(0, nums.length - 1);

    // Reverse the first k elements
    reverse(0, k - 1);

    // Reverse the remaining elements
    reverse(k, nums.length - 1);
    return nums;
};


console.log(rotate([1,2,3,4,5,6,7,8], 3));