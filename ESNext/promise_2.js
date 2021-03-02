
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout.bind(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

function