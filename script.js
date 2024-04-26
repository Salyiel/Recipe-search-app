// Vanilla JavaScript for DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');

    loginBtn.addEventListener('click', () => {
        loginSection.classList.toggle('d-none');
    });
});

// Using Express.js for server-side logic
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5500; // Using environment variable for port

const API_ID = process.env.API_ID; // Storing sensitive data in environment variables
const API_KEY = process.env.API_KEY;

// Handling API request for recipes
app.get('/recipes', async (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter "q" is required' }); // Validation for query parameter
    }

    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recipes:', error.message); // More specific error handling
        res.status(500).json({ message: 'Error fetching recipes' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
