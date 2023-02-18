const topStringDisplayed = document.querySelector('.count-string')
const resultString = document.querySelector('.result-string')
const keyboard = document.querySelector('.keyboard')
const del = document.querySelector('.del-button')

resultString.textContent = '0'

let currentString = ''

del.addEventListener('click', deleteLastElem)

function addToString(e) {
    let clickedButtonValue = e.target.textContent
    currentString += clickedButtonValue 
    // changeOppositeValue()   
    checkStringLastSymbol()   
    topStringDisplayed.textContent = currentString    
}

keyboard.addEventListener('click', addToString)