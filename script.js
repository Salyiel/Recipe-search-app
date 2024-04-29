// Vanilla JavaScript for DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');

    loginBtn.addEventListener('click', () => {
        loginSection.classList.toggle('d-none');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const query = searchInput.value;
        const recipes = await fetchRecipes(query);
        
        displayRecipes(recipes);
    });
});

async function fetchRecipes(query) {
    const response = await fetch(`/recipes?q=${query}`);
    const data = await response.json();
    return data.hits;
}

function displayRecipes(recipes) {
    const recipesSection = document.getElementById('recipes');
    
    let recipeHTML = '';
    recipes.forEach(recipe => {
        recipeHTML += `
            <div class="recipe">
                <h2>${recipe.recipe.label}</h2>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
            </div>
        `;
    });
    
    recipesSection.innerHTML = recipeHTML;
}
