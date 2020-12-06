console.log(this) //this é um módulo vazio
console.log(exports) // exports também é um módulo vazio
console.log(module.exports) // module.exports também é um módlo vazio

// 3 formas de exportar
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo='Até o próximo exemplo'