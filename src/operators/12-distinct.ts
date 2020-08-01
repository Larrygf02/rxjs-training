import { of, from } from 'rxjs';
import { distinct, tap } from 'rxjs/operators';
const numeros = [1,1,2,3,4,2,1]

const numeros$ = of(...numeros)
numeros$.pipe(
    tap(val => console.log('antes del distinct', val)),
    distinct()
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
    distinct(p => p.nombre)
).subscribe(console.log)