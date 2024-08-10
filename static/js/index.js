

const mathWriter = (MathType, mathRange) => {

    if (!MathType | !mathRange) {
        return 0
    } else if (MathType.length > 1 ) {
        return 0
    }

    let Mrange = mathRange.replace(/ /g, '').split('-');


    if (MathType == 't') {
        console.log(Mrange)
    } else if (MathType == 's') {
        
        
    }

};

mathWriter(MathType = 't', mathRange = '3 - 14')