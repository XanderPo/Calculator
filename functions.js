function deleteLastElem() {
    currentString = currentString.slice(0, length-1)
    topStringDisplayed.textContent = currentString
}

function findOperatorInString() {
    if (currentString.indexOf('*') !== -1){
        return '*'
    }
    else if (currentString.indexOf('/') !== -1){
        return '/'
    }
    else if (currentString.indexOf('-') !== -1){
        return '-'
    }
    else if (currentString.indexOf('+') !== -1){
        return '+'
    }
}

function checkStringLastSymbol() {
    let currentStringLastSymbol = currentString[currentString.length-1]
    let preLastCount = currentString[currentString.length-2]
    let withOutLast = currentString.slice(0, currentString.length-1)

    if (currentStringLastSymbol === '*' || currentStringLastSymbol === '/' ||  currentStringLastSymbol === '-' || currentStringLastSymbol === '+' || currentStringLastSymbol === '.'){
        if (currentStringLastSymbol === preLastCount) {
            currentString = currentString.slice(0, length-1)
        }
        else if (preLastCount === '*' || preLastCount === '/' ||  preLastCount === '-' || preLastCount === '+' || preLastCount === '.'){
            currentString = currentString.slice(0, length-1)
        }
        else if (withOutLast.indexOf('*') !== -1 || withOutLast.indexOf('/') !== -1 || withOutLast.indexOf('+') !== -1 || withOutLast.indexOf('-') !== -1){            
            lastElem = currentString.slice(length-1)
            currentString = currentString.slice(0, length-1)
            countResult()
            currentString = `${countResult()}${lastElem}`
            console.log('последний элемент в строке', topStringDisplayed.textContent);
        }
    }
    else if(currentStringLastSymbol === '+/-'){
        
    }
    else if(currentStringLastSymbol === 'C'){
        currentString = ''
        resultString.textContent = '0'
    }
    else if (currentStringLastSymbol === '='){
        currentString = currentString.slice(0, length-1)
        countResult()
        console.log(countResult());
        topStringDisplayed.textContent = currentString
    }
}

function countResult() { 
    let foundOperator = findOperatorInString()
    let operatorIndex = currentString.indexOf(foundOperator)
    let a = Number(currentString.slice(0, operatorIndex))
    let b = Number(currentString.slice(operatorIndex+1))
    let operator = currentString[operatorIndex]

    switch (operator) {
        case '*':
            resultString.textContent = a*b
            return res = a*b
        case '/':
            resultString.textContent = a/b
            return res = a/b
        case '+':
            resultString.textContent = a+b
            return res = a+b
        case '-':
            resultString.textContent = a-b        
            return res = a-b
    }
}