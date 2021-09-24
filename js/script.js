
let text = document.querySelector('.text');
let btn = document.querySelector('.btn');
let button = document.querySelector('.button');

let arr = ['pidor', 'debil', 'norm guy', 'naruto', 'chert']
let random = Math.floor(Math.random() * 5)

btn.onclick = function () {
    text.innerHTML = arr[random];
}

button.onclick = function () {
    text.innerHTML = 'Who I am?';
}