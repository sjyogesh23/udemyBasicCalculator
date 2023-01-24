const defaultResult = 0;
let currentResult = defaultResult;

function oper(currentResult,operation){
  const calcDescription = `${currentResult} ${operation} ${userInput.value}`;
  outputResult(currentResult, calcDescription);
  let arr = {
    Operation: operation,
    CurrentResult: currentResult,
    PreviousResult : calcDescription
  };
  console.log(arr);
}

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  oper(currentResult,'+');
}
function sub() {
  currentResult = currentResult - parseInt(userInput.value);
  oper(currentResult,'-');
}
function mul() {
  currentResult = currentResult * parseInt(userInput.value);
  oper(currentResult,'x');
}
function divi() {
  currentResult = currentResult / parseInt(userInput.value);
  oper(currentResult,'/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', divi);
