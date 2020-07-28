import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]:', error),
    complete: () => console.info('[Completado]')
}

//const obs$ = Observable.create()
// observable de tipo string
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    //const a = undefined
    //a.nombre = 'Raul'
    // cuando se emite el complete, el 
    // observable ya no emite notificacion
    subs.complete();

    subs.next('Este mensaje ya no se notificará')
});

obs$.subscribe(observer)

/* obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.info('Completado')
); */
