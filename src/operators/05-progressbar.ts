import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div')
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta dignissim nulla, a commodo tellus cursus non. Maecenas auctor dictum dui quis dictum. Praesent hendrerit placerat felis, at placerat ipsum iaculis id. Suspendisse hendrerit neque eu nunc gravida, et varius nisi sollicitudin. Quisque quis fringilla augue. In hac habitasse platea dictumst. Morbi a sapien in diam mattis mattis in at ipsum. Nunc pulvinar eros a hendrerit blandit. Nulla facilisi.
<br><br>
Sed congue mi non augue molestie blandit. Integer venenatis purus ac mauris finibus aliquam. Sed facilisis erat a nisi pretium, in euismod arcu vestibulum. Proin dictum tempor est in malesuada. Suspendisse condimentum tristique ullamcorper. Sed iaculis tincidunt nunc, quis laoreet sapien semper a. Morbi fringilla metus mi, non lacinia sem pretium in. Mauris lacinia arcu massa. Nullam volutpat lobortis justo, ut venenatis eros facilisis ut. Fusce ut vehicula leo, vel tincidunt ex.
<br><br>
Integer dictum elit sollicitudin, venenatis est suscipit, euismod dolor. Donec sagittis faucibus scelerisque. Integer ac pulvinar urna. Pellentesque eget quam congue, pellentesque massa et, finibus massa. Integer a est ipsum. Mauris in ex eu lorem tempor aliquam et gravida ex. Phasellus quis diam sit amet diam iaculis egestas. Etiam eros lacus, laoreet porta dui dapibus, placerat vulputate erat. Ut feugiat pellentesque magna, et elementum enim ullamcorper ut.
<br><br>
Morbi eu molestie nisi. Sed vitae orci nec nisi scelerisque efficitur quis ac turpis. Sed eu tincidunt lectus. Phasellus rhoncus pulvinar rutrum. Duis ac tortor ornare, pharetra purus sit amet, vestibulum ex. Phasellus condimentum tortor in auctor consequat. Quisque sodales enim non nunc dapibus, nec vestibulum sem vestibulum. Duis at aliquam tortor, a accumsan nulla. Integer placerat augue nec cursus pellentesque. Aliquam a turpis nec erat maximus sollicitudin. Curabitur suscipit metus ac eros viverra, eu accumsan ante fringilla.
<br><br>
Nunc non blandit felis, vel tempus sem. Suspendisse pulvinar diam eget quam vehicula gravida. Nunc sit amet justo arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et dui sem. Curabitur id sem tincidunt, feugiat dui in, egestas risus. Etiam eget ultricies turpis.
`

const body = document.querySelector('body')
body.append(texto)

// progress bar
const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight) ) * 100
}
// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})

