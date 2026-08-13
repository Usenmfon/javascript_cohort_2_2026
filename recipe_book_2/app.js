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
    },
    {
        title: "Pounded Yam",
        ingredients: [
            "2–3 pounds of true yam (also called puna or African yam)",
            "Water for boiling",
            "Optional: ½ teaspoon salt",
        ]
    },
    {
        title: "Afang Soup",
        ingredients: [
            "400g sliced Okazi/Afang leaves | about 4 handfuls",
            "250g Water leaves",
            "20 to 25 cl red palm oil (about 1 drink glass)",
            "Beef, Kanda and Dry fish",
            "2 tablespoons ground crayfish",
            "Pepper and salt (to taste)",
            "2 stock cubes",
        ]
    }
]


let mainContent = document.getElementsByTagName('main')[0];

recipes.forEach((recipe) => {
    let titleEle = document.createElement('h2');
    let subTitle = document.createElement('h2');

    
    titleEle.textContent = recipe.title
    subTitle.textContent = 'Ingredients';
    
    let listOfIngredients = document.createElement('ul');
    recipe.ingredients.forEach((item) => {
        let list = document.createElement('li');

        list.textContent = item;
        listOfIngredients.appendChild(list)
    })

    mainContent.append(titleEle, subTitle, listOfIngredients);
})

