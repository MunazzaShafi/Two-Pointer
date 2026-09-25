345. Reverse Vowels of a String

Used Two Pointers to reverse only the vowels.

Convert the string into an array using split("") so characters can be modified.
Use left and right pointers from both ends.
If both characters are vowels, swap them.
If left is not a vowel → left++.
If right is not a vowel → right--.
Convert the array back to a string using join("").

Time: O(n)
Space: O(n)