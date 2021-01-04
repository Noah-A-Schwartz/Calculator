let total = 0;
let num1 = 0;
let num2 = 0;
opClicked = "";
isOpClicked = false;//true if an operator was clicked, but doesn't mean last click was an op
lastclick = "op"; //checks if last click was any of the operators
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
    total = (a+b).toFixed(2);
}

function subtract(a, b){
    total = (a-b).toFixed(2);
}

function multiply(a, b){
    total = (a*b).toFixed(2);
}

function divide(a, b){
    total = (a/b).toFixed(2);
}

function updateDisplay(button){
    if(display.textContent === "0")
        display.textContent = "";
    else if(isOpClicked === true && lastclick == "op"){
        display.textContent = "";  
    }

    display.textContent += button.textContent;
    lastclick = "other";
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
    lastclick = "op";
    if(isOpClicked === true){
        equalsClicked();
    }
    isOpClicked = true;
    num1 = parseInt(display.innerText);
    opClicked = operatorButton.textContent;
    

}