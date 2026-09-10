88. Merge Sorted Array

The solution merges the two sorted arrays directly into nums1 using Three Pointers. i points to the last valid element of nums1, j points to the last element of nums2, and k points to the last available position in nums1. We compare nums1[i] and nums2[j] and place the larger value at nums1[k]. Then we move the corresponding pointer backward. We continue while j >= 0, because once all elements of nums2 have been placed, the remaining elements of nums1 are already in the correct position.

Main idea: Compare elements from the end → place the larger value at the end of nums1 → move the pointer backward.

Time Complexity: O(m + n)
Space Complexity: O(1)