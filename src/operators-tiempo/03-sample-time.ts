import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')
click$.pipe(
    sampleTime(2000), // el resultado es el mismo si esta arriba o abajo pero hay un mejor performance arriba ya que no haria el map en cada operacion
    map(({x, y}) => ({x,y})),
).subscribe(console.log)
