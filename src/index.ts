import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]:', error),
    complete: () => console.info('[Completado]')
}

const intervalo$ = new Observable(subs => {
    // crear un contador
    let number = 0
    setInterval(() => {
        subs.next(number)
        number += 1;
        if (number == 10) {
            subs.complete()
        }
    }, 1000)
})

intervalo$.subscribe(console.log)