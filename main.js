const topStringDisplayed = document.querySelector(".count-string");
const display = document.querySelector(".result-string");
const keyboard = document.querySelector(".keyboard");
const delButton = document.querySelector(".del-button");
const oppositeButton = document.querySelector(".opposite");

let symbolsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let operatorsArray = ["/", "*", "-", "+"];
let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = false;
display.textContent = "0";

function countResult() {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operator) {
    case "/":
      return (res = firstNumber / secondNumber);
    case "*":
      return (res = firstNumber * secondNumber);
    case "-":
      return (res = (firstNumber - secondNumber).toFixed(3));
    case "+":
      return (res = firstNumber + secondNumber);
    default:
      break;
  }
}

function displayReset() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
  console.log("сброс");
}

function addValue(e) {
  let buttonValue = e.target.textContent;

  if (buttonValue === "C") {
    displayReset();
    // display.textContent = "0";
  }

  if (symbolsArray.includes(buttonValue) && operator === "") {
    // если введенный символ = число и оператор = пустой строке -
    // получаем первое число
    firstNumber += buttonValue;
    display.textContent = firstNumber;
    console.log("первое число", firstNumber);
  }

  if (operatorsArray.includes(buttonValue) && operator === "") {
    // если введенный символ = не число и такой символ есть в массиве
    // операторов - получаем значение оператора
    operator = buttonValue;
    display.textContent = operator;
    console.log("оператор", operator);
  }

  if (firstNumber !== "" && operator !== "") {
    // есть первое число и оператор и символ есть в массиве символов
    // записываем второе число
    if (symbolsArray.includes(buttonValue)) {
      secondNumber += buttonValue;
      display.textContent = secondNumber;
      console.log("второе число", secondNumber);
      // если символа нет в массиве символов но есть в массиве операторов
      // считаем результат
    } else if (operatorsArray.includes(buttonValue) && secondNumber !== "") {
      firstNumber = countResult();
      display.textContent = firstNumber;
      // result = true
      console.log(firstNumber, "- первое число");
      secondNumber = "";
      console.log(secondNumber, "-второе число");
      operator = buttonValue;
      display.textContent += operator;
      console.log(operator, "-оператор число");
    }
  }
  // если нажата кнопка =
  if (buttonValue === "=") {
    console.log(
      "в блоке знака =",
      "пер число",
      firstNumber,
      "втор число",
      secondNumber,
      operator
    );
    if (operator !== "" && firstNumber !== "" && secondNumber !== "") {
      countResult();
      let result = countResult();
      display.textContent = result;
      console.log(result, "result");
    }
  }

  if (buttonValue === "+/-") {
    if (secondNumber !== "") {
      secondNumber = -secondNumber;
      display.textContent = secondNumber;
    } else if (firstNumber !== "" && operator === "") {
      firstNumber = -firstNumber;
      display.textContent = firstNumber;
    } else if (operator !== "" && secondNumber === "") {
      return;
    }
  }

  if (buttonValue === "%") {
    if (secondNumber !== "") {
      secondNumber = secondNumber / 100;
      display.textContent = secondNumber;
    } else if (firstNumber !== "" && operator === "") {
      firstNumber = firstNumber / 100;
      display.textContent = firstNumber;
    } else if (operator !== "" && secondNumber === "") {
      return;
    }
  }
}

function delLastElement() {
  if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    secondNumber = secondNumber.slice(0, secondNumber.length - 1);
    display.textContent = `${firstNumber}${operator}${secondNumber}`;
    console.log(secondNumber);
  } else if (firstNumber !== "" && operator !== "" && secondNumber === "") {
    operator = operator.slice(0, operator.length - 1);
    display.textContent = `${firstNumber}${operator}${secondNumber}`;
    console.log(operator);
  } else if (firstNumber !== "" && operator === "" && secondNumber === "") {
    firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    display.textContent = `${firstNumber}${operator}${secondNumber}`;
    if (firstNumber === ''){
      display.textContent = '0'
    }
    console.log(firstNumber);
  } else {
    console.log("Error");
  }
}

delButton.addEventListener("click", delLastElement);
keyboard.addEventListener("click", addValue);
