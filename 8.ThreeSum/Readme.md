Used Sorting + Two Pointers to find all unique triplets whose sum is 0.

Sort the array first.
Fix one number using i.
Use left and right pointers to find the other two numbers.
sum > 0 → move right--
sum < 0 → move left++
sum === 0 → store the triplet and move both pointers.
Skip duplicate values to avoid duplicate triplets.

Time: O(n²)
Space: O(1) extra space (excluding the output)