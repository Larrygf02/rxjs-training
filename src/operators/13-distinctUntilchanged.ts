import { of, from } from 'rxjs';
import { tap, distinctUntilChanged } from 'rxjs/operators';
const numeros = [1,1,2,3,4,4,1]

const numeros$ = of(...numeros)
numeros$.pipe(
    //tap(val => console.log('antes del distinct', val)),
    distinctUntilChanged()
).subscribe(console.log)

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Acuaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Hola'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    }
]

// distinct in objects
from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log)