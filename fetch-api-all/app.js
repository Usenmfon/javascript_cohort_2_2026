
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => displayPost(data.filter((item,index) => index < 10)))

let body = document.body;

function displayPost(posts){
    posts.forEach((post) => {

        let divTag = document.createElement('div');

        let userIdTag = document.createElement('p')
        let postTitleTag = document.createElement('p')
        let statusTag = document.createElement('p')

        userIdTag.textContent = `User ID: ${post.userId}`
        postTitleTag.textContent =  `Post Title: ${post.title}`
        statusTag.textContent = `Status: ${post.completed}`

        divTag.append(userIdTag, postTitleTag, statusTag);

        body.appendChild(divTag);
    })

}