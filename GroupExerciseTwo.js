//NO 14
function countVowels(str) {
    const vowels = "aeiouAEIOU";  //Defines a string including both lower case vowels and uppercase vowels and checks later if each imput in the string character(char) is a vowel
    let count = 0; //creates a variable count that checks how many vowels are found in the string, the initial count is 0

    for (let char of str) { //iterates over each character of the input string
        if (vowels.includes(char)) {  //checks if the string has vowel characters
            count++;  //increments the vowel count by 1
        }
    }
    return count;
}

console.log(countVowels("This is a group assignment"));
console.log(countVowels("Hey,be careful with using chat gpt"));




//NO 15
function findTheHighestNumber(numbers){
    return Math.max(...numbers);
}
let numbers = [3, 8, 1, 6, 10];

console.log (findTheHighestNumber(numbers));





//NO 16
function isPalindrome(str) {
    const reversed = str
    .split('')
    .reverse('')
    .join('')

    return str === reversed;

}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));




//NO 17
function isEven(number) {
    return number % 2 == 0;
}

console.log(isEven(4));
console.log(isEven(5));
