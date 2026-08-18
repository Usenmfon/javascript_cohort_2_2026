let students = [
    {
        name: "Joel",
        gender: "male",
        complexion: "chocolate",
        hobbies: ["football", "music", "tourism"],
        image: "./images/sample-image.jpg",
    }
]


let textBox = document.getElementById('text-box');

students.forEach((obj) => {
    let name = document.createElement('p');
    let gender = document.createElement('p');
    let complexion = document.createElement('p');

    let hobbies = document.createElement('ol');

    name.textContent = `My name is ${obj.name}`
    gender.textContent = `I am a ${obj.gender}`
    complexion.textContent = `My complexion is ${obj.complexion}`

    obj.hobbies.forEach((hobby) => {
        let li = document.createElement('li');

        li.textContent = hobby;

        hobbies.appendChild(li);
    })

    textBox.append(name, gender, complexion, hobbies)
})


let imageBox = document.getElementById('image-box');

let image = document.createElement('img');

image.src = students[0].image

imageBox.appendChild(image)

