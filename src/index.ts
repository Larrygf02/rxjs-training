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
        console.log(number)
    }, 1000)

    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
})

const subs1 = intervalo$.subscribe()
const subs2 = intervalo$.subscribe()
const subs3 = intervalo$.subscribe()

setTimeout(() => {
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()
    console.log('Completado timeout')
}, 3000)