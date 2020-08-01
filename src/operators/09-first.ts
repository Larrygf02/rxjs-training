import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    tap(console.log),
    first<MouseEvent>(({clientY}) => clientY >= 150 )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete: ')
})