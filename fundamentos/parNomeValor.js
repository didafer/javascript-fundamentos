// par nome/valor
const saudacao = 'Opa' // contexto Léxico 1 - Em que local físico sua variável foi definida.

function exec (){
    const saudacao = "Falaaa" // contexto Léxio 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    } 
}

console.log(saudacao)
console.log(exec())
console.log(cliente)