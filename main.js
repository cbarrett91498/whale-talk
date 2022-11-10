let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];



for (let i = 0; i < input.length; i++) {
    let whaleTalk = input[i];
    // console.log(i);
    if (whaleTalk === 'e') {
        resultArray.push(input[i]);
    }
    if (whaleTalk === 'u') {
        resultArray.push(input[i]);
    }
    
    for (let j = 0; j < vowels.length; j++) {
        let vowelCheck = vowels[j];

        if (whaleTalk === vowelCheck) {
            resultArray.push(whaleTalk);
        }
        
    }

    
}
let resultString = resultArray.join('').toLocaleUpperCase();

console.log(resultString);
