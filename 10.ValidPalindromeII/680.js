var validPalindrome = function(s) {

    function check(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (s[left] !== s[right]) {
            // Remove either left character or right character
            return check(left + 1, right) || check(left, right - 1);
        }

        left++;
        right--;
    }

    return true;
};