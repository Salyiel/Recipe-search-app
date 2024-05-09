// Vanilla JavaScript for DOM manipulation
// document.addEventListener('DOMContentLoaded', () => {
//     // Extract username and full name from the query parameters
//     const urlParams = new URLSearchParams(window.location.search);
//     const username = urlParams.get('username');
//     const fullName = urlParams.get('fullName');

//     // Display user information on the page
//     const userInfoDiv = document.getElementById('user-info');
//     userInfoDiv.innerHTML = `<p>Welcome, ${fullName} (${username})</p>`;
// });
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');

    loginBtn.addEventListener('click', () => {
        loginSection.classList.toggle('d-none');
    });
    // Event listener for the "Create Profile" button
    const showCreateProfileBtn = document.getElementById("show-create-profile");
    showCreateProfileBtn.addEventListener("click", () => {
        const loginFormContainer = document.getElementById("login-form-container");
        const createProfileFormContainer = document.getElementById("create-profile-form-container");

        // Hide the login form container and display the create profile form container
        loginFormContainer.style.display = "none";
        createProfileFormContainer.style.display = "block";
    });

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = [
            { username: 'user1', password: 'password1', fullName: 'User One' },
            { username: 'user2', password: 'password2', fullName: 'User Two' },
            // Add more user objects as needed
        ];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Authentication successful, redirect to homepage with user info
            window.location.href = `/index.html?username=${user.username}&fullName=${user.fullName}`;
        } else {
            // Authentication failed, display error message or handle it as needed
            alert('Invalid username or password');
        }
    });

    const createProfileForm = document.getElementById('create-profile-form');

    createProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const usernameInput = document.getElementById('new-username');
        const passwordInput = document.getElementById('new-password');
        const emailInput = document.getElementById('email');
        const fullnameInput = document.getElementById('fullname');
    
        if (!usernameInput.value || !passwordInput.value || !emailInput.value || !fullnameInput.value) {
            alert("Please fill in all fields");
        } else {
            // Redirect to the homepage after successful form submission
            window.location.href = "/index.html";
        }
    });
});

    
    
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    
    if (message) {
        // Display the message to the user
        alert(message);
    }
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
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = 'lightskyblue'; // Change background color on hover
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = ''; // Reset background color on mouseout
        });

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
        const truncatedIngredients = recipe.recipe.ingredientLines.slice(0, 5); // Truncate to only 5 ingredients
        ingredients.textContent = truncatedIngredients.join(', ');

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('d-flex', 'justify-content-between'); // Create a flex container for buttons

        const viewRecipeBtn = document.createElement('a');
        viewRecipeBtn.classList.add('btn', 'btn-primary', 'view-recipe');
        viewRecipeBtn.setAttribute('href', recipe.recipe.url);
        viewRecipeBtn.setAttribute('target', '_blank');
        viewRecipeBtn.textContent = 'View Recipe';

        const addToFavoritesIcon = document.createElement('i');
        addToFavoritesIcon.classList.add('fas', 'fa-heart', 'favorite-icon');
        addToFavoritesIcon.addEventListener('click', () => {
            addToFavoritesIcon.classList.toggle('favorited'); // Toggle the 'favorited' class on click
            addToFavorites(recipe); // Add the recipe to favorites
        });

        buttonGroup.appendChild(viewRecipeBtn);
        buttonGroup.appendChild(addToFavoritesIcon);

        cardBody.appendChild(title);
        cardBody.appendChild(image);
        cardBody.appendChild(ingredients);
        cardBody.appendChild(buttonGroup); // Append the button group instead of individual buttons
        card.appendChild(cardBody);
        recipeCard.appendChild(card);
        row.appendChild(recipeCard);
    });

    recipesSection.appendChild(row);
}


function addToFavorites(recipe) {
    // Add the recipe to favorites
    favorites.push(recipe);
    
    // Update the favorites section on the page
    updateFavoritesSection();
    
    // Save favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateFavoritesSection() {
    // Clear previous favorites displayed on the page
    favoritesSection.innerHTML = '';
    
    // Iterate through favorites and display them on the page
    favorites.forEach((recipe) => {
        const favoriteItem = document.createElement('div');
        favoriteItem.textContent = recipe.title;
        favoritesSection.appendChild(favoriteItem);
    });
}
    // Function to show/hide the scroll-to-top button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scroll-to-top").style.display = "block";
        } else {
            document.getElementById("scroll-to-top").style.display = "none";
        }
    }

    // Function to scroll to the top of the page
    document.getElementById("scroll-to-top").onclick = function () { topFunction() };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
