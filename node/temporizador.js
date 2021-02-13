const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 5', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds()) // (De 5 em 5 segundos, em qualquer minuto, 18 horas, ignora o dia do mes, qualquer mes, na quarta-feira(3))
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando a Tarefa 1!")
}, 20000)

// setImmediate - JavaScript
// setInterval - JavaScript

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

console.log('Aguardando Tarefas: ...')




