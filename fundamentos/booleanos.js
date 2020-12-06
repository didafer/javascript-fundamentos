let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // Tem um espaço...vai ser true
console.log(!!'texto')
console.log(!![])
console.log(!!{}) // Objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // Vazia sem conteúdo ... false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // false, false, false , verdadeiro - pega primeiro caso verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')


