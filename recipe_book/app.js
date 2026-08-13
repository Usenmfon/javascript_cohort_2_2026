let recipes = [
    {
        title: "Nigerian Jollof rice",
        ingredients: [
            "Long-grain parboiled rice",
            "Fresh tomatoes, red bell peppers, scotch bonnet peppers",
            "Onions, garlic, ginger" ,
            "Tomato paste",
            "Vegetable oil",
            "Stock (chicken, beef, or vegetable)",
            "Seasonings: thyme, curry powder, paprika, black pepper, bouillon powder, bay leaves",
            "Optional: meat (chicken, beef, or fish), vegetables (carrots, green bell peppers)",
        ]
    }
]


let body = document.body;

let titleEle = document.createElement('h2');
let subTitle = document.createElement('h2');

titleEle.textContent = recipes[0].title
subTitle.textContent = 'Ingredients';

body.append(titleEle, subTitle);

let listOfIngredients = document.createElement('ul');

recipes[0].ingredients.forEach((item) => {
    let listTag = document.createElement('li');

    listTag.textContent = item;
    listOfIngredients.appendChild(listTag);
});

body.appendChild(listOfIngredients);