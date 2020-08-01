import { ajax } from 'rxjs/ajax'

// api para hacer pruebas
const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
})

obs$.subscribe(data => console.log("data", data))
