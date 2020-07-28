// subscribirse con el mismo valor usando subject
import { Observable, Observer, Subscriber, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]:', error),
    complete: () => console.info('[Completado]')
}

const intervalo$ = new Observable<number>( subs => {
    const interval = setInterval(() => subs.next(Math.random()), 5000);
    return () => clearInterval(interval);
})

// subject es un tipo especial de observable
const subject$ = new Subject()
intervalo$.subscribe(subject$)
//const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd))
//const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd))

const subs1 = subject$.subscribe(rnd => console.log('subs1: ', rnd))
const subs2 = subject$.subscribe(rnd => console.log('subs2: ', rnd))