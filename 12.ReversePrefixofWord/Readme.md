2000. Reverse Prefix of Word

Used Two Pointers to reverse the prefix of the word up to the first occurrence of ch.

Find the first index of ch.
Convert the string into an array using split("").
Set left = 0 and right = index.
Swap characters while left < right.
Convert the array back to a string using join("").

Time: O(n)
Space: O(n)