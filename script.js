// Vanilla JavaScript for DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');

    loginBtn.addEventListener('click', () => {
        loginSection.classList.toggle('d-none');
    });
});
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const recipesSection = document.querySelector('#recipes');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
});

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=152eb6ce&app_key=45b14f74322d42c2b4a840c0fbbc6845`);
    const data = await response.json();
    displayRecipes(data.hits);
}
function displayRecipes(recipes) {
    recipesSection.innerHTML = ''; // Clear previous search results
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', 'mb-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = recipe.recipe.label;

        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.setAttribute('src', recipe.recipe.image);
        image.setAttribute('alt', recipe.recipe.label);

        const ingredients = document.createElement('p');
        ingredients.classList.add('card-text');
        ingredients.textContent = recipe.recipe.ingredientLines.join(', ');

        const viewRecipeBtn = document.createElement('a');
        viewRecipeBtn.classList.add('btn', 'btn-primary', 'view-recipe');
        viewRecipeBtn.setAttribute('href', recipe.recipe.url);
        viewRecipeBtn.setAttribute('target', '_blank');
        viewRecipeBtn.textContent = 'View Recipe';

        cardBody.appendChild(title);
        cardBody.appendChild(image);
        cardBody.appendChild(ingredients);
        cardBody.appendChild(viewRecipeBtn);
        recipeCard.appendChild(cardBody);
        recipesSection.appendChild(recipeCard);
    });
}
