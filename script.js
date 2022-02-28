var numFirst = prompt('Digite um número');
var oper = prompt("Digite a operação");


while(oper != '-' && oper != '+' && oper != '/' && oper != '*'){
    alert("Digite um operador válido (+, -, /, *)")

    oper = prompt("Digite a operação")
}
var numLast = prompt("Digite outro número");

var resultadoFinal = 0;

numFirst = parseInt(numFirst)
numLast = parseInt(numLast)

if(oper == '-'){
    resultadoFinal = numFirst - numLast;

}else if(oper == '+'){
    resultadoFinal = numFirst + numLast;

}else if(oper == '/'){
    resultadoFinal = numFirst / numLast;
}else if(oper == '*'){
    resultadoFinal = numFirst * numLast;
}

alert("O resultado final é: " + resultadoFinal)