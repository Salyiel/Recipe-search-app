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
const PORT = 3000;

const API_ID = 'YOUR_EDAMAM_API_ID';
const API_KEY = 'YOUR_EDAMAM_API_KEY';

app.get('/recipes', async (req, res) => {
    const query = req.query.q;
    
    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});