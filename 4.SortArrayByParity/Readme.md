905. Sort Array By Parity

I used the Two Pointer approach to move all even numbers to the left side and odd numbers to the right side.

I initialized two pointers: i at the beginning and j at the end of the array.

If nums[i] is even, I move i forward because it is already in the correct position.
If nums[j] is odd, I move j backward because it is already in the correct position.
Otherwise, nums[i] is odd and nums[j] is even, so I swap them and move both pointers.

The array is modified in-place, so no extra result array is needed.

Time Complexity: O(n)
Space Complexity: O(1)