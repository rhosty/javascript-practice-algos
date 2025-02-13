// Instructions:
// Complete the solution so that it reverses the string passed into it.
// e.g. 
// 1. 'world'  =>  'dlrow'
// 2. 'word'   =>  'drow'

function reverseString(string) {
    let backwards = "";
    for (let i = string.length - 1; i >= 0; i--){
        backwards += string[i];
    }
    return backwards
}


// DO NOT TOUCH TESTS BELOW
console.log(reverseString('world') === 'dlrow' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(reverseString('word') === 'drow' ? '✅ 02 - Test Passed' : '❌ 02 - Test Failed');