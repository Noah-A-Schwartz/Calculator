let total = 0;
let num1 = 0;
let num2 = 0;
opClicked = "";
isOpClicked = false;//true if an operator was clicked, but doesn't mean last click was an op
lastclick = "op"; //checks if last click was any of the operators
let decimalButton = document.getElementById("decimal-button")
let display = document.getElementById('answer');
let numbuttons = document.querySelectorAll('.num-button');

numbuttons.forEach((button) =>{
    button.addEventListener('click', updateDisplay);
})

let operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((button) =>{
    button.addEventListener('click', operatorClick);
})

document.querySelector('#eql').addEventListener('click', equalsClicked);
document.querySelector('#clr').addEventListener('click', clearDisplay);



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
    num2 = Number((display.textContent));
    if(num2 === 0 && opClicked ==="/"){
        display.textContent = "Divide by Zero error"
        return;
    }
    else operate(opClicked, num1, num2);
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

function updateDisplay(){
    if(display.textContent === "0")
        display.textContent = "";
    else if(isOpClicked === true && lastclick == "op"){
        display.textContent = "";  
    }

    display.textContent += this.textContent;
    lastclick = "other";
    if(display.textContent.includes("."))
    decimalButton.disabled = true;
    else decimalButton.disabled = false;
}
function clearDisplay(){
    display.textContent = "0"
    total = 0;
    isOpClicked = false;
    opClicked = "";
    num1 = 0;
    num2 = 0;
    decimalButton.disabled = false;

}

function operatorClick(){
    lastclick = "op";
    if(isOpClicked === true){
        equalsClicked();
    }
    isOpClicked = true;
    num1 = Number((display.innerText));
    opClicked = this.textContent;
    

}