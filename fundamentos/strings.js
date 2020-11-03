const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Valor do número 3 na tabela ASCII
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // substitui tudo por 'e' --- REGE

console.log('Ana, Maria, Pedro'.split(',')) // Converte String em um Array
