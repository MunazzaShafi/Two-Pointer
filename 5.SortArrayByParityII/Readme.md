922. Sort Array By Parity II

I used the Two Pointer approach with two pointers: even starts at index 0 and odd starts at index 1.

The even pointer checks only even indexes (0, 2, 4...) and makes sure they contain even numbers.
The odd pointer checks only odd indexes (1, 3, 5...) and makes sure they contain odd numbers.
If a number is already in the correct position, its pointer moves forward by 2.
If both positions contain the wrong parity, I swap the two numbers and move both pointers by 2.

This approach modifies the array in-place without using an extra result array.

Time Complexity: O(n)
Space Complexity: O(1)