import { asyncScheduler } from 'rxjs'

// setTimeout (() => {}, 3000)
// setInterval (() => {}, 3000)

const saludar = () => console.log('Hola mundo')
const saludar2 = nombre => console.log(`Hola ${nombre}`)

// ejecuta el saludar despues de 2 segundos
//asyncScheduler.schedule(saludar, 2000)
//asyncScheduler.schedule(saludar2, 2000, 'Raulin')

const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state)
    this.schedule(state + 1, 1000)
}, 2000, 0)

setTimeout(() => {
    subs.unsubscribe();
}, 6000)