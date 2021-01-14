const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 2.99, fragil: true },
    { nome: 'Copo de Plástico', preco: 10.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

//console.log(produtos.filter(produto => produto.preco >=500).filter(produto => produto.fragil))