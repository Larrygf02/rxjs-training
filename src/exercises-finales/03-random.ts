import { interval, Subject, Observer } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{


   const observer: Observer<any> = {
        next: value => console.log('[next]: ', value),
        error: error => console.warn('[error]:', error),
        complete: () => console.info('[Completado]')
   }
  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

  const subject$ = new Subject()
  const subscription = reloj$.subscribe(subject$)
  //reloj$.subscribe( val => console.log('obs1', val) );
  //reloj$.subscribe( val => console.log('obs2', val) );
  const reloj1 = subject$.subscribe(observer)
  const reloj2 = subject$.subscribe(observer)

  subject$.subscribe(console.log)




})();

		