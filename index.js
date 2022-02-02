
function checkPalindrome() {
    const arrayString = string.split('');

    const reverseArray = arrayString.reverse('');

    const revrseString = reverseArray.join('')
    
    if (string == revrseString) {
        console.log('it is palindrom')
    } else {
        console.log('it is not palindrom ')
    }
    
}

const string = prompt('enter a string')

checkPalindrome(string);


