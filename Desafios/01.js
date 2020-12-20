/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 multiplicação e divisão desses valores.*/

const soma = function(valor1, valor2){
    return valor1 + valor2
}

const subtracao = function(valor1, valor2){
    return valor1 - valor2
}

const multiplicacao = function(valor1, valor2){
    return valor1 * valor2
}

const divisao = function(valor1, valor2){
    return valor1 / valor2
}


const imprimirResultado = function (valor1, valor2, operacao = soma){
    console.log(operacao(valor1, valor2))
}

imprimirResultado(1, 2, soma)
imprimirResultado(1, 2, subtracao)
imprimirResultado(1, 2, multiplicacao)
imprimirResultado(1, 2, divisao)

