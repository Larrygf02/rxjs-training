
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators'

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
)

keyupMapTo$.subscribe(code => console.log('mapTo', code))
