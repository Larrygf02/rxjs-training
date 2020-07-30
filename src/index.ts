// operadores
// controla el flujo de informacion 
// que llega en una subscripcion
import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'

/* range(1,5).pipe(
    map<number, number>(val => val * 10)
)
.subscribe(console.log) */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map<any,any>(val => val.key)
).subscribe(console.log)
//keyup$.subscribe(val => console.log('map', val))