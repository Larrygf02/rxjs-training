import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// api para hacer pruebas
const url = 'https://httpbxin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message)
    return of({})
}

/* const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
)
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
); */

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)
obs$.subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('complete')
});
//obs2$.subscribe(data => console.log('ajax', data))
