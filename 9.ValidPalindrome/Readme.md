125. Valid Palindrome

Used String Cleaning + Two Pointers to check if the string is a palindrome.

Convert the string to lowercase.
Remove spaces, symbols, and special characters using Regex.
Use left and right pointers to compare characters from both ends.
If characters differ → return false.
If all characters match → return true.

Time: O(n)
Space: O(n) due to the cleaned string.