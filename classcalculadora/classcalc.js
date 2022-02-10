class Calculadora {
    constructor(_operand1, _operand2, _operation){
        this.operand1 = _operand1
        this.operand2 = _operand2;
        this.operation = _operation;
    }
    setOperand1(_operand1){
        return this.operand1;
    }
    setOperand2(_operand2){
        return this.operand2;
    }
    setOperation(_operation){
        return this.operation;
    }
    getResult(){
        if (this.operation === "soma"){
            return this.operand1 + this.operand2
        }else if(this.operation === "menos"){
            return this.operand1 - this.operand2
        }else if(this.operation === "vezes"){
            return this.operand1 * this.operand2
        }else if(this.operation === "dividir"){
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

let memoria = [];

function numero(valor){
    memoria.push(valor)
}

function sinal(valor){
    memoria.push(" " + valor + " ")
}

function resultado(){
    let contaseparada = memoria.join("");
    let arraysplit = [];
    arraysplit = contaseparada.split(" ");
    let numeroum = parseInt(arraysplit[0]);
    let numerodois = parseInt(arraysplit[2]);
    let operacao = arraysplit[1];
    let conta = new Calculadora(numeroum, numerodois, operacao);
    return document.getElementById("resultado").innerHTML = conta.getResult()
}

function ac(){
    document.getElementById("resultado").innerHTML = "";
    memoria = [];

}