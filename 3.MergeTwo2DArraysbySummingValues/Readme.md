2570. Merge Two 2D Arrays by Summing Values

I used the Two Pointer approach because both arrays are already sorted by their IDs. I used two pointers, i for nums1 and j for nums2, and compared their IDs.
Conditions:-
If both IDs are equal, I added their values and pushed the combined pair into result, then moved both pointers.
If the ID in nums1 is smaller, I pushed nums1[i] into the result and moved i.
If the ID in nums2 is smaller, I pushed nums2[j] into the result and moved j.
After the main loop, I used two additional while loops to add any remaining elements from either array.

This works efficiently because each element is visited only once, giving O(n + m) time complexity and O(n + m) space complexity for the result array.