const p = document.querySelector('p');
const div = document.querySelector('div');


div.addEventListener('click', function(event){
    console.log(div)

    event.stopPropagation();
},true);