const formEle = document.forms[0];


formEle.addEventListener('submit', function(e){
    e.preventDefault()
    
    let marketList = [];
    const formData = new FormData(formEle);
    const data = Object.fromEntries(formData.entries());

    marketList.push(data)
    console.log(marketList);
    displayMarketList(marketList)

    formEle.reset();
})

const marketListContainer = document.getElementById('market-list-container');
let ol = document.createElement('ol');

function displayMarketList(payload)
{
    
    payload.forEach((i) => {
        let li = document.createElement('li');

        li.textContent = `${i.item} - ${i.price}`

        ol.appendChild(li)
    })
    marketListContainer.appendChild(ol);

}