const search = document.getElementById("search").addEventListener("click", function(){
    const menuInput = document.getElementById("menu-input").value;
    if(menuInput == ""){
            alert("Do you want to see random menu?");
        }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menuInput}`)
    .then(res => res.json())
    .then(data => {
        const mealsDiv = document.getElementById("food-menu");
        mealsDiv.innerHTML = "";
        data.meals.forEach(element => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "menu";
            const mealInfo = `
                        <div onclick="displayMenuDetails('${element.strMeal}')">
                        <img class="menu-image" src="${element.strMealThumb}" >
                        <h3 class="menu-name">${element.strMeal}</h3>
                        </div>`
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        });
    });

    displayMenuDetails = name =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => renderMenuInfo(data.meals[0]));
    }
    const renderMenuInfo = food =>{
        console.log(food);
    const foodDetails = document.getElementById("food-details");
    foodDetails.innerHTML = `
    <img class="menu-image" src="${food.strMealThumb}" >
    <h1>${food.strMeal}</h1>
    <h4>Ingredients</h4>
    <ul>
        <li><h6>${food.strIngredient1}</h6></li>
        <li><h6>${food.strIngredient2}</h6></li>
        <li><h6>${food.strIngredient3}</h6></li>
        <li><h6>${food.strIngredient4}</h6></li>
        <li><h6>${food.strIngredient5}</h6></li>
        <li><h6>${food.strIngredient6}</h6></li>
    </ul>
    <button id="order-button">Order Now</button>
    `
    }
})

        