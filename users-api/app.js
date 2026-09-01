let mainTag = document.getElementsByTagName('main')[0];

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => displayUsers(users));

function displayUsers(users)
{
    users.forEach((user) => {
        let div = document.createElement('div');
        let pName = document.createElement('p');
        let pUsername = document.createElement('p');
        let pEmail = document.createElement('p');

        let pAddress = document.createElement('div');
        let pGeo = document.createElement('div');
        let pCompany = document.createElement('div');

        pName.textContent = `Name: ${user.name}`
        pUsername.textContent = `UserName: ${user.username}`
        pEmail.textContent =`Email: ${user.email}`

        pAddress.classList.add('address')

        pAddress.innerHTML = `
            <p><strong>Address</strong></p>
            <p>Street: ${user.address.street}</p>
            <p>Suite: ${user.address.suite}</p>
        `

        pGeo.innerHTML =  `
            <p><strong>Geo</strong></p>
            <p>Lat: ${user.address.geo.lat}</p>
            <p>Lng: ${user.address.geo.lng}</p>
        `

        pCompany.classList.add('company')

        pCompany.innerHTML = `
            <p><strong>Company</strong></p>
            <p>Name: ${user.company.name}</p>
            <p>Catch Phrase: ${user.company.catchPhrase}</p>
            <p>BS: ${user.company.bs}</p>
        `

        div.classList.add('card')

        div.append(pName, pUsername, pEmail, pAddress, pGeo, pCompany)

        mainTag.appendChild(div)
    })
}