680. Valid Palindrome II

Used Two Pointers with at most one character deletion.

Start left at the beginning and right at the end.
Compare both characters.
If they match, move both pointers inward.
If they don't match, try skipping either the left or right character.
A helper check() verifies whether the remaining substring is a palindrome.
If either option works, return true.

Time: O(n)
Space: O(1)