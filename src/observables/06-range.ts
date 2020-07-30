import { of, range, asyncScheduler } from "rxjs";

/* el of por defecto es sincrono*/
const src1$ = of(1,2,3,4,5)

//console.log('inicio')
//src1$.subscribe(console.log)
//console.log('fin')

// range(a,b) => a: Inicio, b: numero emisiones
// asyncScheduler transforma el comportamiento sincrono a asincrono
const src2$ = range(1,5, asyncScheduler)
console.log('inicio')
src2$.subscribe(console.log)
console.log('fin')