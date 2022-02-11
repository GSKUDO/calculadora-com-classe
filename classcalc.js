class Calculadora {
    constructor(operand1, operand2, operation){
        this.operand1 = operand1
        this.operand2 = operand2;
        this.operation = operation;
    }
    setOperand1(operand1){
        this.operand1 = operand1;
        return this.operand1;
    }
    setOperand2(operand2){
        this.operand2 = operand2;
        return this.operand2;
    }
    setOperation(operation){
        this.operation = operation;
        return this.operation;
    }
    getResult(){
        if (this.operation === '+'){
            return this.operand1 + this.operand2
        }else if(this.operation === '-'){
            return this.operand1 - this.operand2
        }else if(this.operation === 'X'){
            return this.operand1 * this.operand2
        }else if(this.operation === '/'){
            return this.operand1 / this.operand2
        }
    }

    clearCalculator(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = "";
        return this.operand1, this.operand2, this.operation
    }
} 

const calc = new Calculadora();
let numerodigitado = [];
let display = [];

function numero(valor){
    numerodigitado.push(valor);
    return document.getElementById("memoria").innerHTML = numerodigitado.join("");
}

function setOperation(operator){
    const number1 = Number(document.getElementById("memoria").innerHTML);
    calc.setOperand1(number1);
    calc.setOperation(operator);
    display.push(number1 + " " + operator);
    document.getElementById("display").innerHTML = display;
    document.getElementById("memoria").innerHTML = "";
    numerodigitado = [];
}

function getResult(){
    const number2 = Number(document.getElementById("memoria").innerHTML);
    document.getElementById("memoria").innerHTML = ""; 
    calc.setOperand2(number2);
    display.push(" " + number2 + " " + "=" + " " + calc.getResult() + "  ");
    document.getElementById("memoria").innerHTML = calc.getResult();
    document.getElementById("display").innerHTML = display.join("");
    numerodigitado = [];
    console.log(calc);
}

function ac(){
    calc.clearCalculator();
    numerodigitado = [];
    document.getElementById("memoria").innerHTML = "";
    document.getElementById("display").innerHTML = "";
    display = [];
}