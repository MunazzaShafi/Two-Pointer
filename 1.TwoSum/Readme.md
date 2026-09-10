1. Two Sum

The solution first creates a new array containing each number along with its original index, so the indexes are not lost when sorting. It then sorts this array by the numbers in ascending order. Two pointers, left and right, are placed at the beginning and end of the sorted array. We calculate their sum and compare it with the target: if the sum is equal to the target, we return the original indexes; if the sum is smaller, we move left forward to get a larger value; if the sum is larger, we move right backward to get a smaller value. This allows us to find the required pair efficiently while preserving the original indexes.

Main idea: Store values with their original indexes → sort by value → use two pointers → return the original indexes.

Time Complexity: O(n log n) because of sorting.
Space Complexity: O(n) for storing the values and original indexes.