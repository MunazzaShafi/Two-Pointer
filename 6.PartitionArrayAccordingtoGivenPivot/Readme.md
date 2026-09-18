2161. Partition Array According to Given Pivot

I used a simple one-pass traversal to partition the array into three groups: numbers smaller than the pivot, numbers equal to the pivot, and numbers greater than the pivot.

I created three separate arrays: smaller, equal, and greater. While traversing the input array, each number is pushed into its corresponding group. Since I process the numbers from left to right, their original relative order is preserved.

Finally, I combined the three arrays using the spread operator:

[...smaller, ...equal, ...greater]

This gives the required order: smaller values → pivot values → greater values.

Time Complexity: O(n)
Space Complexity: O(n)