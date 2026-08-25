const formEle = document.forms[0];

let marketList = JSON.parse(localStorage.getItem('marketList')) || [];

formEle.addEventListener('submit', function(e){
    e.preventDefault()
    
    const formData = new FormData(formEle);
    const data = Object.fromEntries(formData.entries());

    addToList(data);

    marketList.push(data)
    
    localStorage.setItem('marketList', JSON.stringify(marketList))
        
    formEle.reset();
})


console.log(marketList);

const marketListContainer = document.getElementById('market-list-container');
let ol = document.createElement('ol');


function addToList(data)
{
    let li = document.createElement('li');

    li.textContent = `${data.item} - ${data.price}`
    ol.appendChild(li);
}

function displayMarketList()
{

    payload = JSON.parse(localStorage.getItem('marketList')) || [];
    
    payload.forEach((i) => {
        let li = document.createElement('li');

        li.textContent = `${i.item} - ${i.price}`

        ol.appendChild(li)
    })
    marketListContainer.replaceChildren(ol);

}

displayMarketList()


let clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', function(){
    localStorage.clear();

    location.reload();
})