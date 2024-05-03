Recipe Search App

A single-page web application for searching and displaying recipes using the Edamam Recipe Search API.

## Menu
The menu section provides navigation options for users to easily navigate through different parts of the application:

- **Home**: Navigate to the home section where users can search for recipes.
- **Favorites**: Navigate to the favorites section to view and manage favorite recipes (feature to be implemented).
- **About**: Navigate to the about section to learn more about the application and its features.

## Bootstrap

The project utilizes Bootstrap for styling and layout, making the web application responsive and visually appealing. Bootstrap classes are used extensively in the HTML to style various components such as the header, menu, and form elements.


Features:

Recipe Search: Search for recipes based on ingredients or dish names.
View Recipe: Click on a recipe to view the full recipe details on the Edamam website.
Favorites: Add recipes to favorites for quick access.


## Technologies Used

Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: Node js and Express
API: Edamam Recipe Search API

## Folder Structure
index.js: Main server file with Express setup and API endpoints.
package.json: Lists project dependencies and scripts.

## SETUP

Prerequisites:
Node.js installed on your machine
Edamam API ID and API Key


## Installation
To run this application locally, follow these steps:

Clone this repository to your local machine.
bash
Copy code
git clone <repository-url>
Navigate to the project directory.
bash
Copy code
cd recipe-search
Open the index.html file in your preferred web browser.
Once installed, run npm install express to also enable the server to run 
start the server by typing in node index.js it should automatically run on http://localhost:3000

## Backend Server
The backend server is implemented using Express.js and handles user authentication, profile creation, and favorites management. Here are the key features of the backend server:

Register Endpoint: Allows users to create a new account with a unique username and password.
Login Endpoint: Authenticates users based on their username and password.
Add Favorite Recipe Endpoint: Allows users to add recipes to their favorites list.
In-memory Storage: User and recipe data are stored in memory and are not persisted between server restarts.

## Usage

1. **Search Recipes**: Enter ingredients or dish names in the search bar and click the "Search" button.
2. **View Recipe**: Click on a recipe card to view the full recipe on the Edamam website.
3. **Favorites**: Add your favorite recipes to the favorites section by clicking on a "Add to Favorites" button (feature to be implemented).

## API Reference

- [Edamam Recipe Search API Documentation](https://developer.edamam.com/edamam-recipe-api)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Edamam](https://www.edamam.com/) for providing the Recipe Search API
- Icons made by [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/)

---

