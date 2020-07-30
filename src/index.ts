import { interval, timer } from 'rxjs'

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const timer$ = timer(2000)
// El interval es asincrono
const interval$ = interval(1000)

console.log('Inicio')
//interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')