


const loadMeals = (search) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meal => {
    const mealDisplay = document.getElementById('meal');
    mealDisplay.innerHTML = ``
    meal.forEach(meal => {
        const cardCol = document.createElement('div');
        cardCol.classList.add('col')
        cardCol.innerHTML = `
        <div onclick = "getElementId(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)} ......</p>
            </div>
        </div>
        `;
        mealDisplay.appendChild(cardCol);
        // console.log(meal);
    });

}

const searchFood = () =>{
    const searchValue = document.getElementById('search-input');
    const searchValueText = searchValue.value;

  loadMeals(searchValueText);
  searchValue.value = ''
}

loadMeals('a')


const getElementId = (mealID) =>{
        
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
    .then(res => res.json())
    .then(id => displayMealsInfo(id.meals[0]))


}

const displayMealsInfo = meal => {
    const displaySingleMeal = document.getElementById('single-meal-info');
    displaySingleMeal.innerHTML = ` `
    displaySingleMeal.classList.add('card');
    const createDisplayElement = document.createElement('div');
    createDisplayElement.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)} ......</p>
    </div>
</div>
    `;
    displaySingleMeal.appendChild(createDisplayElement)

}
