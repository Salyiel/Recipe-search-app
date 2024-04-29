// Using Express.js for server-side logic

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5500;

const API_ID = '152eb6ce';
const API_KEY = '45b14f74322d42c2b4a840c0fbbc6845';

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