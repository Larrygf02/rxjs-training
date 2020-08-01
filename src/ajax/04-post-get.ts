import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// api para hacer pruebas
const url = 'https://httpbin.org/delay/1';

ajax.post(url,{
    id: 1,
    nombre: 'Grace'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log)


ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Peque'
    }
}).subscribe(console.log)

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message)
    return of({})
}
