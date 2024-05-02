// Vanilla JavaScript for DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');

    loginBtn.addEventListener('click', () => {
        loginSection.classList.toggle('d-none');
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        // Add event listener to the "Create Profile" button
        document.getElementById("show-create-profile").addEventListener("click", function(event) {
            // Prevent the default button behavior
            event.preventDefault();
            // Select the form container element
            var formContainer = document.getElementById("create-profile-form-container");
            // Change its display property to block to make it visible
            formContainer.style.display = "block";
            
            var loginFormContainer = document.getElementById("login-form-container");
            loginFormContainer.style.display = "none";
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
    const row = document.createElement('div');
    row.classList.add('row');

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('col-md-4', 'mb-3'); // Adjust the column size as needed

        const card = document.createElement('div');
        card.classList.add('card');

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

        const addToFavoritesIcon = document.createElement('i');
        addToFavoritesIcon.classList.add('fas', 'fa-heart', 'favorite-icon');
        addToFavoritesIcon.addEventListener('click', () => {
            // Add functionality to handle adding recipe to favorites
            // For example, you can use local storage to store favorite recipes
        });

        cardBody.appendChild(title);
        cardBody.appendChild(image);
        cardBody.appendChild(ingredients);
        cardBody.appendChild(viewRecipeBtn);
        cardBody.appendChild(addToFavoritesIcon);
        card.appendChild(cardBody);
        recipeCard.appendChild(card);
        row.appendChild(recipeCard);
    });

    recipesSection.appendChild(row);
}

