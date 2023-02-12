function fizzBuzz(start, end, skip){
    let fizzArr = []

    for (let i = start; i <= end; i++) {
        fizzArr.push(i)
    }

    console.log(`Current state of fizzArr: ${fizzArr}`)

    for (let i = 0; i < fizzArr.length; i++) {
        console.log(`num = ${fizzArr[i]}`)
        if (fizzArr[i].toString().includes(skip.toString())) {
            fizzArr.splice(fizzArr.indexOf(fizzArr[i]), 1);
            console.log(`Splicing ${fizzArr[i]}`)
            i -= 1;
        }
    }

    return fizzArr;
}

console.log(fizzBuzz(1, 20, 1))

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;