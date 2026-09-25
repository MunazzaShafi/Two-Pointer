var reversePrefix = function(word, ch) {
     let index=0;
    let result=word.split("");

    for(let i=0;i<word.length;i++){
        if(word[i]==ch){
            index=+i;
            break;
        }
    }

    let left=0;
    let right=index;
    
   while(left<right){

        [result[left],result[right]]=[result[right],result[left]];
        left++;
        right--;
    }
    return result.join('');
};