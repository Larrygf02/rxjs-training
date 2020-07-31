import { range, of } from 'rxjs';
import { filter } from 'rxjs/operators'

range(1,10).pipe(
    filter(val => val % 2 == 1)
)//.subscribe(console.log)

const personajes = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
]

const obs$ = of(...personajes)
let tipo = 'Villano'
obs$.pipe(
    filter(personaje => personaje.tipo == tipo)
).subscribe(console.log)