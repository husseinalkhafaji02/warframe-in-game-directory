//Author: Hussein Alkhafaji 
//backend app
const express = require('express');
const Items = require('warframe-items');
const app = express();

// Initialize Warframe items
const items = new Items();

// Endpoint to get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Endpoint to get a specific item by name
app.get('/items/:name', (req, res) => {
    const itemName = req.params.name;
    const item = items.find(i => i.name.toLowerCase() === itemName.toLowerCase());
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Start the server balal a fandafn
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
