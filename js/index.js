//Buttons
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');
//Inputs
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
let input3 = document.getElementById('result');
//Arrays
let buttons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]
//Functions
function makeOperation(operationCode) {
    if (operationCode === '<span>+</span>') {
        var operation = Number(input1.value) + Number(input2.value);
    } else if (operationCode === '<span>-</span>') {
        var operation = Number(input1.value) - Number(input2.value);
    } else if (operationCode === '<span>×</span>') {
        var operation = Number(input1.value) * Number(input2.value);
    } else if (operationCode === '<span>÷</span>') {
        var operation = Number(input1.value) / Number(input2.value);
    }

    input3.value = operation;
}
   
function onOperationButtonClick(eventObject) {
    var clickedEl = eventObject.currentTarget;
    var operation = clickedEl.innerHTML;
    makeOperation(operation);
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onOperationButtonClick)
}

/* //Events
buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDivide.addEventListener('click', onOperationButtonClick); */