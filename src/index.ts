import { Observable } from 'rxjs';

//const obs$ = Observable.create()
// observable de tipo string
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');
    // cuando se emite el complete, el 
    // observable ya no emite notificacion
    subs.complete();

    subs.next('Este mensaje ya no se notificará')
});

obs$.subscribe(console.log)
