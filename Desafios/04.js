/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao(dividendo, divisor) {
    resultado = dividendo / divisor
    resto = dividendo % divisor
    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${resto}`)
}

divisao(11, 3)


