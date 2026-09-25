var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    let vowels = 'AEIOUaeiou';
    let result = s.split('');

    while (left < right) {

        if (vowels.includes(result[left]) &&
            vowels.includes(result[right])) {

            [result[left], result[right]] =
            [result[right], result[left]];

            left++;
            right--;
        }

        else if (!vowels.includes(result[left])) {
            left++;
        }

        else {
            right--;
        }
    }

    return result.join('');
};