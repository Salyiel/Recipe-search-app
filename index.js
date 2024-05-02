// Using Express.js for server-side logic
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for users and recipes
let users = [];
let recipes = [];


// HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Routes
// Register endpoint
app.post('/register', (req, res) => {
    const { username, password, email, fullname } = req.body;

    // Check if username already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).send('Username already exists');
    }

    // Create new user object
    const newUser = {
        username,
        password,
        email,
        fullname,
        favorites: []
    };

    // Store new user
    users.push(newUser);
    
    // Redirect back to home page with a message
    res.redirect('/?message=User registered successfully');

    // Alternatively, you can include any other message you want to display.
    // res.redirect('/?message=Welcome');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    res.send(user);
});

// Add favorite recipe endpoint
app.post('/favorite', (req, res) => {
    const { username, recipe } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Add recipe to user's favorites
    user.favorites.push(recipe);
    res.status(200).send('Recipe added to favorites');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
