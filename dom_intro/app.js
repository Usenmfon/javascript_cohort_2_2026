let html = document;

console.log(html)

let pTag = document.getElementsByTagName('p');

console.log(pTag[1])
pTag[0].style.color = 'blue';
pTag[1].style.color = 'red';

let greetings = 'Good morning class!!!';

let greetingEle = document.createElement('h1');

let body = document.body;

greetingEle.textContent = greetings;
body.appendChild(greetingEle);

let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'magenta', 'gray'];

let font_size = 1;

colors.forEach((color) => {
    let colorTag = document.createElement('p');

    colorTag.textContent = color;
    colorTag.style.fontSize = `${font_size}rem`;
    colorTag.style.color = color;
    font_size += 1;

    body.appendChild(colorTag);
})
