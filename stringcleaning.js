function strClean(arrOfStrs){    
    let finalArr = [];
    let splitArr = [];
    let trimmedArr = [];

    for (let i = 0; i < arrOfStrs.length; i++) {
        let wordArr = arrOfStrs[i].trim();
        console.log(`Current wordArr: ${wordArr}`);
        let splitWordArr = wordArr.split('')
        splitArr.push(splitWordArr);
    }
    console.log('splitArr =');
    console.log(splitArr);

    for (word of splitArr) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == ' ') {
                word[i] = '_';
            }

            if (parseInt(word[i]) || word[i] == '0') {
                console.log(`${word[i]} is a number`)
                if (word[i] != '0' && word[i] != '1') {
                    console.log(`${word[i]} is not 0 or 1`);
                    word.splice(i, 1); 
                    i -= 1;
                }
                else {
                    if (word[i] == '0') {
                        console.log('val = 0')
                        word.splice(i, 1, 'z', 'e', 'r', 'o');
                        i += 3;
                    }
                    else {
                        console.log('val = 1')
                        word.splice(i, 1, 'o', 'n', 'e');
                        i += 2;
                    }
                }
            }
        }

        let finalWord = '';

        for (letter of word) {
            finalWord += letter;
        }

        finalArr.push(finalWord);
    }

    return finalArr;
}

result = strClean(['  Blah!           ','10023','100']);
console.log(`RESULT =`);
console.log(result)


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;