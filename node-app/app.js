//Author: Hussein Alkhafaji 
//backend app
// app.js
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname)));

// Load Warframe items data
const itemsPath = path.join(__dirname, 'node_modules', 'warframe-items', 'data', 'json', "All.json");
let items = [];

fs.readFile(itemsPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading items file:', err);
        return;
    }
    items = JSON.parse(data);
});

// Endpoint to get item by name
app.get('/item/:name', (req, res) => {
    const itemName = req.params.name.toLowerCase();
    const item = items.find(i => i.name && i.name.toLowerCase() === itemName);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
