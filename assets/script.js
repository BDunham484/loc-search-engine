let inputEl = document.getElementById('input');
let buttonEl = document.getElementById('submit-btn');
let formatsEl = document.getElementById('formats');
let resultsEl = document.getElementById('results');

const runQuery = (e) => {
    e.preventDefault();

    let userInput = inputEl.value.trim().split(' ').join('_');
    let formatInput = formatsEl.value
    let format = formatInput ? formatInput : 'search';
    let input = userInput ? 'q=' + userInput : ''

    console.log('userInput: ', userInput);
    console.log('formatInput: ', formatInput);
    console.log('input: ', input);

    let searchUrl = `https://www.loc.gov/${format}/?${input}&fo=json`

    console.log('searchUrl: ', searchUrl);

    const dataFunc = (data) => {
        console.log(data)
        // if (data) {
        //     data.results.map(x => {
        //         console.log('x: ', x.description);
        //         let listItem = document.createElement('li');
        //         listItem.textContent = x.title;
        //         resultsEl.appendChild(listItem);
        //     })
        // }
    };

    fetch(searchUrl)
        .then(function (response) {
            if (!response.ok) {
                console.log('No Way!');
            };
            return response.json();
        })
        .then(function (data) {
            inputEl.value = '';
            formatsEl.value = '';
            dataFunc(data);
        })
};

buttonEl.addEventListener('click', runQuery);