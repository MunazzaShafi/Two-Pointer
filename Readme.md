 Link of Leetcode problem Solution:-
 
 1. [Two Sum](https://leetcode.com/problems/two-sum/submissions/2137119521/)

 2. [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/submissions/2137160045/)

 3. [Merge Two 2D Arrays by Summing Values](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/submissions/2144413733/)

 4. [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/submissions/2145860615/)

 5. [Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/submissions/2145875156/)

 6. [Partition Array According to Given Pivot](https://leetcode.com/problems/partition-array-according-to-given-pivot/submissions/2145896138/)



                            Two Pointer

In DSA (Data Structures and Algorithms), a pointer is a variable that stores the memory address of another variable or object.HashMap works well with an unsorted array while Two Pointers usually works best with a sorted array.A HashMap is used when you want to quickly find information using a key while a pointer is used to store the address/location of data in memory.

For example, in C++:
int x = 10;
int* ptr = &x;

Here:
x stores the value 10.
&x means “the memory address of x.”
ptr stores that address.
*ptr means “the value stored at the address inside ptr.”


What is Two Pointers?

Two Pointers is a technique where we use two indexes/pointers to traverse an array or string efficiently.

Instead of repeatedly comparing elements using nested loops, we move the pointers based on a condition.

The main goal is often to reduce:

O(n²) → O(n)

while avoiding unnecessary work.

When to Use Two Pointers?

Two Pointers is commonly useful when:

The array/string is sorted
We need to find or compare pairs
We need to process elements from both ends
We need to partition/rearrange an array
We are working with two sorted arrays
We want an in-place solution with less extra space
Basic Pattern

For processing from both ends:

let left = 0;
let right = nums.length - 1;

while (left < right) {
    // check condition

    left++;
    right--;
}

The important part is not the template itself, but understanding when and why each pointer should move.

Main Two Pointer Patterns
1. Opposite Direction

One pointer starts from the beginning and the other from the end.

left →        ← right
[ 1  2  3  4  5 ]

Used for:

Palindromes
Pair problems
Reversing
Partitioning
2. Same Direction

Both pointers move from left to right, but they may move at different speeds.

let left = 0;

for (let right = 0; right < nums.length; right++) {
    // process nums[right]
}

Used for:

Removing duplicates
Moving elements
Compacting arrays
3. Two Arrays

One pointer is used for each array.

let i = 0;
let j = 0;

while (i < nums1.length && j < nums2.length) {
    // compare nums1[i] and nums2[j]
}

Used for:

Merging sorted arrays
Finding common elements
Comparing two sorted arrays
Two Pointers with Sorted Arrays

Sorting gives us useful information about the elements around the pointers.

For example:

[1, 2, 3, 4, 6]
 ↑           ↑
left        right

If we are looking for a target sum:

Sum too small → move left
Sum too large → move right
Sum matches → found the answer

This avoids checking every possible pair.

Partitioning with Two Pointers

Two Pointers can also separate elements based on a condition.

Example:

[3, 1, 2, 4]
 ↑        ↑
left     right

If left contains an odd number and right contains an even number, swap them:

[nums[left], nums[right]] =
[nums[right], nums[left]];

This idea is used in Sort Array By Parity.

Pointer Movement

The most important part of Two Pointers is deciding which pointer moves and why.

For example:

if (nums[left] % 2 === 0) {
    left++;
}

The left element is already correct, so we move left.

Don't move a pointer randomly. Every pointer movement should be justified by the problem's condition.

Time & Space Complexity

If both pointers move through the array and each element is processed a limited number of times:

Time: O(n)

If we modify the original array:

Space: O(1)

If we create a separate result array:

Space: O(n)
Two Pointers vs HashMap
Two Pointers

Uses positions/indexes.

left → element ← right

Best for:

Sorted arrays
Pair problems
Partitioning
In-place operations
HashMap

Uses key → value lookup.

Best for:

Counting
Frequency
Fast lookup
Grouping
Quick Recognition Rule

When solving a problem, ask:

Can I use two indexes to process the data without checking every possible pair?

If yes, Two Pointers may be useful.

Then determine:

Where should the pointers start?
What does each pointer represent?
When should each pointer move?
When should I swap/process?
When should the loop stop?
Key Takeaway

Two Pointers is an algorithmic technique that uses two indexes to efficiently process arrays or strings, often reducing unnecessary comparisons and improving O(n²) solutions to O(n).

The technique is more about pointer movement logic than memorizing a fixed template.