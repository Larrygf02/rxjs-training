import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

// const source$ = of([1,2,3,4])

// get data of fetch with subscription
/* const source$ = from(fetch('https://api.github.com/users/klerith'))

source$.subscribe(async resp => {
    console.log(resp.ok)
    const dataResp = await resp.json();
    console.log(dataResp)
}) */


const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();
from(miIterable).subscribe(observer)