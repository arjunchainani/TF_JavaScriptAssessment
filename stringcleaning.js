function strClean(arrOfStrs){    
    let finalArr = [];
    let splitArr = [];
    let trimmedArr = [];

    for (let i = 0; i < arrOfStrs.length; i++) {
        // arrOfStrs[i] = arrOfStrs[i].trim()
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

            // if (parseInt(word[i]) || word[i] == '0') {

            // if (parseInt(word[i]) != NaN) {
            //     console.log(`${word[i]} is a number`) 
            //     if (word[i] != '0' && word[i] != '1') {
            //         console.log(`${word[i]} is not 0 or 1`);
            //         word.splice(i, 1); 
            //         i -= 1;
            //     }
            //     else {
            //         if (word[i] == '0') {
            //             console.log('val = 0')
            //             //word.splice(i, 1, 'z', 'e', 'r', 'o');
            //             word.splice(i, 1, "zero");
            //             // i += 3;
            //         }
            //         else {
            //             console.log('val = 1')
            //             //word.splice(i, 1, 'o', 'n', 'e');
            //             word.splice(i, 1, "one");
            //             // i += 2;
            //         }
            //     }
            // }
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

    

    // for (let i = 0; i < arrOfStrs.length; i++) {
    //     console.log('Running for loop i')
    //     let wordArr = arrOfStrs[i].split('');
    //     for (let j = 0; j < wordArr.length; j++) {
    //         console.log('Running for loop j')
    //         if (wordArr[j] == ' ') {
    //             let whitespace = true;
    //             for (let k = 0; k < j; k++) {
    //                 console.log('Running for loop k')
    //                 if (wordArr[k] != ' ') {
    //                     whitespace = false;
    //                     break;
    //                 }
    //             }
    //             console.log(`whitespace = ${whitespace}`)
    //             return whitespace;

    //         }
    //     }
    // }

    return finalArr;
}

result = strClean(['  Blah!           ','10023','100']);
console.log(`RESULT =`);
console.log(result)


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;