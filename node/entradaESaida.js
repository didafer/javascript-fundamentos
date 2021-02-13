const anonimo =  process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // O replace foi utilizado pois por padrão o Enter também é passado.
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}