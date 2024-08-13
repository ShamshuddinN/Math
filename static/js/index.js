const randomChoice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const mathWriter = (MathType, mathRange) => {


    if (!MathType || !mathRange) {
        console.log('Math type or range is not found')
        return 0

    } else if (MathType.length > 1 ) {
        console.log('math type length should be only one character')
        return 0
    }

    let Mrange = mathRange.replace(/ /g, '').split('-');
    

    if (!Number(Mrange[0]) | !Number(Mrange[1])) {
        console.log('invald range')
        return 0
    } else if ( (Number(Mrange[1]) - Number(Mrange[0])) + 1 > 13 && MathType == 't' ) {
        console.log('Range is too large for Tables');
        return 0
    } else if ((Number(Mrange[1]) - Number(Mrange[0])) + 1 > 30) {
        console.log(`Range is too large`)
        return 0
    } else if (  Number(Mrange[1]) - Number(Mrange[0]) + 1 <= 0 ) {
        console.log(`Range is Too low`)
        return 0
    }
    

    if (MathType == 't') {
        document.querySelector('#tablesDiv').innerHTML = '';

        

        let mainTable = ``

        for (let k = Number(Mrange[0]); k < Number(Mrange[1]) + 1; k++) {
            
            mainTable += `<div class="col"> <p> ${k} X 2 = ${k*2} </p>`
            mainTable += `<p> ${k} X 3 = ${k*3} </p>`
            mainTable += `<p> ${k} X 4 = ${k*4} </p>`
            mainTable += `<p> ${k} X 5 = ${k*5} </p>`
            mainTable += `<p> ${k} X 6 = ${k*6} </p>`
            mainTable += `<p> ${k} X 7 = ${k*7} </p>`
            mainTable += `<p> ${k} X 8 = ${k*8} </p>`
            mainTable += `<p> ${k} X 9 = ${k*9} </p> </div>`
        }

        document.querySelector('#tablesDiv').innerHTML += mainTable;

        


    } else if (MathType == 's') {

        const squaresEle = document.querySelector('#squaresT')
        if (squaresEle) {
            squaresEle.remove()
        }


        const mainColumnSt = `<div id = "squaresT" class="col">` // Main column
        const subColumnSq1St = `<div class="row justify-content-center"> ` // single row
        const subColumnSq2St = `<div class="col">` // Multiple table columns

        const divEnd = `</div>`
        

        let squaresPad = ``;
        let seqCounter = 0

        let finalSHTML = `${mainColumnSt} ${subColumnSq1St} `

        for (let sq = Number(Mrange[0]); sq < Number(Mrange[1]) + 1; sq++) {
            squaresPad += `<p> ${sq} <sup> 2 </sup> = ${sq**2} </p>`
            seqCounter += 1

            if (seqCounter == 8) {
                finalSHTML += ` ${subColumnSq2St} ${squaresPad} ${divEnd} `
                squaresPad = ''
                seqCounter = 0
            }
        }
        
        if (squaresPad != '') {
            finalSHTML += ` ${subColumnSq2St} ${squaresPad} ${divEnd} `
        }

        finalSHTML += ` ${divEnd} ${divEnd}`


        document.querySelector('#SQnCuDiv').innerHTML += finalSHTML

    } else if (MathType == 'c') {
        const CubesEle = document.querySelector('#CubesT')
        if (CubesEle) {
            CubesEle.remove()
        }

        const mainColumnSt = `<div id = "CubesT" class="col">` // Main column
        const subColumnSq1St = `<div class="row justify-content-center"> ` // single row
        const subColumnSq2St = `<div class="col">` // Multiple table columns

        const divEnd = `</div>`

        let CubesPad = ``;
        let seqCounter = 0

        let finalSHTML = `${mainColumnSt} ${subColumnSq1St} `;


        for (let cu = Number(Mrange[0]); cu < Number(Mrange[1]) + 1; cu++) {
            CubesPad += `<p> ${cu} <sup> 3 </sup> = ${cu**3} </p>`
            seqCounter += 1

            if (seqCounter == 8) {
                finalSHTML += ` ${subColumnSq2St} ${CubesPad} ${divEnd} `
                CubesPad = ''
                seqCounter = 0
            }
        }

        if (CubesPad != '') {
            finalSHTML += ` ${subColumnSq2St} ${CubesPad} ${divEnd} `
        }

        finalSHTML += ` ${divEnd} ${divEnd}`


        document.querySelector('#SQnCuDiv').innerHTML += finalSHTML
        
    }

};

const handleDisplays = (entity) => {

    if (entity == 'T') {
        const Tclasses = document.querySelector('#mainTblDiv').classList
        
        if (Tclasses.value.includes('d-none')) {
            Tclasses.remove('d-none')
        } else {
            Tclasses.add('d-none')
        }
    } else if (entity == 'S') { //Display for Squares & Cubes
        const SnQCommonElement = document.querySelector('#SQnCu')

        if (SnQCommonElement.classList.value.includes('d-none')) {
            SnQCommonElement.classList.remove('d-none')
            
        } else {
            SnQCommonElement.classList.add('d-none')
            
        }
    }

}

var IT = 0
var InS = 0
var IC = 0
let choiceList = []

const problemHandler = (IPrm) => {

    if (IPrm == 't') {
        if (!IT) {
            IT = 1
            choiceList.push('t')
        } else {
            IT = 0
            choiceList = choiceList.filter(ele => (ele !== 't') )
        }
        
    } else if (IPrm == 's') {
        if (!InS) {
            InS = 1
            choiceList.push('s')
        } else {
            InS = 0
            choiceList = choiceList.filter(ele => (ele !== 's') )
        }
        
    } else if (IPrm == 'c') {
        if (!IC) {
            IC = 1
            choiceList.push('c')
        } else {
            IC = 0
            choiceList = choiceList.filter(ele => (ele !== 'c') )
        }
        
    }

    let PChoice = '';

    

    if (choiceList.length > 1) {
        PChoice = randomChoice(choiceList)
    } else if (choiceList.length == 1) {
        PChoice = choiceList[0]
    }

    if (PChoice != '') {
        MathProblem(PChoice)
    } else if (IPrm == 'u' && PChoice == '') {
        document.getElementById('MathProblem').innerText = ''
        displayAlert("Select atleast one category below", 'd')
    }

}

var theSolution = 0

const MathProblem = (choice) => {
    let num1 = Math.round(Math.random() * 25)
    const n2List = [2, 3, 4, 5, 6, 7, 8, 9]

    if (num1 == 0 || num1 == 1) {
        num1 = randomChoice(n2List)
    }

    let num2 = randomChoice(n2List)

    let probText = ``

    if (choice == 't') {
        displayProblem(`Solve: ${num1} X ${num2}`)
        theSolution = num1 * num2
    } else if (choice == 's') {
        displayProblem(`Solve: ${num1} sup2`)
        theSolution = num1 ** 2
    } else if (choice == 'c') {
        displayProblem(`Solve: ${num1} sup3`)
        theSolution = num1 ** 3
    }
    
}


let intervalId;

const intervalTimer = () => {

    const timerElement = document.getElementById('timerElement')

    let secs = 0    

    intervalId = setInterval(() => {
        secs += 1

        timerElement.innerText = `Time: ${secs}`

        if (secs >= 5) {

            if (timerElement.classList.value.includes('text-dark')) {
                timerElement.classList.remove('text-dark')
            }
            
            if (!timerElement.classList.value.includes('text-danger')) {
                timerElement.classList.add('text-danger')
            }
            
        } else if (timerElement.classList.value.includes('text-danger')) {
            timerElement.classList.remove('text-danger')
            timerElement.classList.add('text-dark')
        }

        if (secs == 10) {
            timerElement.innerText = 'TimeOut!'
        }


    }, 1000)

    
}


// Displaying problem Function:
const displayProblem = (problemText) => {

    if (problemText.includes('sup2')) {
        let pTxt = problemText.replace('sup2', '')
        document.getElementById('MathProblem').innerHTML = pTxt + ` <sup> 2 </sup> `
    } else if (problemText.includes('sup3')) {
        let pTxt = problemText.replace('sup3', '')
        document.getElementById('MathProblem').innerHTML = pTxt + ` <sup> 3 </sup> `
    } else {
        document.getElementById('MathProblem').innerText = problemText
    }


    document.getElementById('timerElement').innerText = 'Time: 0'

    clearInterval(intervalId)
    intervalTimer()

    setTimeout(() => {
        clearInterval(intervalId)
    }, 10000)



    return 1

}

const timerStop = () => {
    clearInterval(intervalId); // Stop the interval
};


const displayAlert = (message, tone) => {
    if (!message || message.length < 2) {
        return 0
    }

    const alertEle = document.getElementById('Alert');
    alertEle.innerText = message
    if (tone == 'd') {
        if (alertEle.classList.value.includes('alert-success')) {
            alertEle.classList.remove('alert-success')
            alertEle.classList.add('alert-danger')
        } else if (!alertEle.classList.value.includes('alert-danger')) {
            alertEle.classList.add('alert-danger')
        }
    } else if (tone = 's') {
        if (alertEle.classList.value.includes('alert-danger')) {
            alertEle.classList.remove('alert-danger')
            alertEle.classList.add('alert-success')
        } else if (!alertEle.classList.value.includes('alert-success')) {
            alertEle.classList.add('alert-success')
        }
    }
    alertEle.classList.remove('d-none')

    setTimeout( () => {
        alertEle.classList.add('d-none')
    }, 1000)    
}

const checkAnswer = (e) => {
    if (e.key == 'Enter') {
        Evaluate()
    }
}

const Evaluate = () => {
    const inputValue = document.getElementsByTagName('input')[0].value

    if (!Number(inputValue)) {
        displayAlert('Invalid answer', 'd')
        return 0
    }

    if (document.getElementById('MathProblem').innerText == '') {
        displayAlert("First Generate a Problem Statement!", "d")
        clearInput()
        theSolution = 0
        return 0
    }

    if (Number(inputValue) == theSolution) {
        displayAlert("That's Correct! Try another One :)", "s")
        clearInput()
        problemHandler('u')
    } else {
        displayAlert("Wrong Answer, Try Again", 'd')
    }
    
}

const clearInput = () => {
    document.getElementsByTagName('input')[0].value = ''
}


const writer = (wType) => {
    
    if (wType == 't') {
        let rangeval = document.querySelector('#rangeVal').value
        mathWriter(MathType = 't', mathRange = rangeval)

    } else if (wType == 's') {
        let rangeval = document.querySelector('#rangeVal1').value
        mathWriter(MathType = 's', mathRange = rangeval)
        
    } else if (wType == 'c') {
        let rangeval = document.querySelector('#rangeVal1').value
        mathWriter(MathType = 'c', mathRange = rangeval)
    }

}

