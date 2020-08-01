const url = 'https://api.github.com/usexs?per_page=5';

const fetchPromesa = fetch(url);

fetchPromesa
    .then(resp => resp.json())
    .then(console.log)
    .catch(err => console.warn('error en usuarios', err))

