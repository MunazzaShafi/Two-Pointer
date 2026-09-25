1754. Largest Merge Of Two Strings

Used Two Pointers + Lexicographical Comparison.

i and j track the current positions in word1 and word2.
Compare the remaining strings using slice(i) and slice(j).
Take the character from the string whose remaining part is lexicographically larger.
When one string is finished, append the remaining characters from the other string.

Time: O(n² + m²) due to repeated slice() comparisons
Space: O(n + m) for the result