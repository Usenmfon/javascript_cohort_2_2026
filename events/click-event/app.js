
let btn = document.getElementsByTagName('button')[0];
let numberBox = document.getElementById("number-box");
let count = 0;
numberBox.textContent = count;

btn.addEventListener('click', function(){
    numberBox.textContent = ++count;
});