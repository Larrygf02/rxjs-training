import { fromEvent } from 'rxjs';
import { debounceTime, map, debounce, pluck, mergeAll, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')
// antes
/* input$.pipe(
    debounceTime(500),
    map(  event => {
        const texto = event.target['value'];
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    })
).subscribe(resp => {
    resp.subscribe(console.log)
}) */

// despues
input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    pluck('items')
)/* .subscribe(resp => {
    console.log(resp[0].score)
}) */

const url = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(url+texto))
).subscribe(console.log)

