'use strict';

const inputUAH = document.querySelector('#UAH'),
      inputUSD = document.querySelector('#USD');

inputUSD.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUAH.value = (+inputUSD.value * data.current.USD).toFixed(2); // tofixed(2) -округление до сотых
        } else {
            inputUAH.value = 'Йой!';
        }
    });
});

inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.USD).toFixed(3); // до тысячных
        } else {
            inputUSD.value = 'Oops!';
        }
    });
});