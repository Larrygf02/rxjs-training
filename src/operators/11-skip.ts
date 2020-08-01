import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')


const boton = document.createElement('button')
boton.innerHTML = 'Detener Timer'
document.querySelector('body').append(boton)

const counter$ = interval(1000)
//const clickBtn$ = fromEvent(boton,'click')
const clickBtn$ = fromEvent(boton, 'click').pipe(
    skip(1)
)

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete: ')
})