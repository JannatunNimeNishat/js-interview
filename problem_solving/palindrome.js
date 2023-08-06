// Q. Write a code to calculate if the string is palindrome ? (Use javascript only)

function checkPalindrome(myString){
    
    if(myString == myString.split('').reverse().join('')){ 
        return `${myString} is  palindrome`;
    }
    else{
        return `${myString} is not palindrome`;
    }

}

console.log(checkPalindrome('WOW'));

