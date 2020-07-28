import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]:', error),
    complete: () => console.info('[Completado]')
}

const intervalo$ = new Observable<number>(subs => {
    // crear un contador
    let number = 0
    const interval = setInterval(() => {
        subs.next(number)
        number += 1;
    }, 1000)

    setTimeout(() => {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
})

const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

subs1.add(subs2)
     .add(subs3)

setTimeout(() => {
    subs1.unsubscribe()
    console.log('Completado timeout')
}, 3000)