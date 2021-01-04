let total = 0;
let num1 = 0;
let num2 = 0;
opClicked = "";
isOpClicked = false;
let display = document.getElementById('answer');
let numbuttons = document.querySelectorAll('.num-button');




function operate(operator, a, b){
    if(operator === "+")
        add(a,b);
    else if(operator === "-")
        subtract(a,b);
    else if(operator === "*")
        multiply(a,b);
    else if(operator === "/")
        divide(a,b);
}

function equalsClicked(){
    num2 = parseInt(display.textContent);
    operate(opClicked, num1, num2);
    num1 = total;
    display.textContent = total.toString();
    isOpClicked = false;
}

function add(a, b){
    total = (a+b);
}

function subtract(a, b){
    total = (a-b);
}

function multiply(a, b){
    total = (a*b);
}

function divide(a, b){
    total = (a*b);
}

function updateDisplay(num){
    if(display.textContent === "0")
        display.textContent = "";
    else if(isOpClicked === true){
        display.textContent = "";
    }
    display.textContent += num.textContent;
}
function clearDisplay(){
    display.textContent = "0"
    total = 0;
    isOpClicked = false;
    opClicked = "";
    num1 = 0;
    num2 = 0;

}

function operatorClick(operatorButton){
    if(isOpClicked === true){
        equalsClicked();
    }
    isOpClicked = true;
    num1 = parseInt(display.innerText);
    opClicked = operatorButton.textContent;
    

}