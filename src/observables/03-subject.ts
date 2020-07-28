// subscribirse con el mismo valor usando subject
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]:', error),
    complete: () => console.info('[Completado]')
}

const intervalo$ = new Observable<number>( subs => {
    const interval = setInterval(() => subs.next(Math.random()), 1000);
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
})

// subject es un tipo especial de observable
const subject$ = new Subject()
const subscription = intervalo$.subscribe(subject$)
//const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd))
//const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(10)
    subject$.complete()
    subscription.unsubscribe();
}, 3500)

// Nota cuando la data es producida por el observable en sí mismo
// es considerado un "Cold Observable"
// Pero cuando la data es producida FUERA del observable es llamada
// "Hot Observable" 