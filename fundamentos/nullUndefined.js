let valor // não inicializada
console.log(valor)
//console.log(valor2)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)








/*const a = {nome: 'texte'}
b = a // aqui foi igualado o endereço de b ao de a - Atribuição por referência
b.nome = 'opa' // aqui foi trocado a atributo nome do mesmo endereço de a
console.log(a)
console.log(b)

c = 3 // tipo primitivo é feita uma cópia por valor
d = c
d++
console.log(c)
console.log(d)*/