import { fromEvent } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click')
click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log)


const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup')
input$.pipe(
    throttleTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)