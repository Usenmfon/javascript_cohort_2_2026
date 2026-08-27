
fetch('https://jsonplaceholder.typicode.com/todos/50')
.then(response => response.json())
.then(data => displayPost(data))

let divTag = document.getElementsByTagName('div')[0]

let userIDTag = document.getElementById('userId');
let postTitleTag = document.getElementById('postTitle');
let statusTag = document.getElementById('status');

function displayPost(data){
    userIDTag.textContent += data.userId;
    postTitleTag.textContent += data.title;
    statusTag.textContent += data.completed;
}