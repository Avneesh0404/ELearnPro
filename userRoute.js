const express = require('express');
const mongoose = require('mongoose');
const feedback = require('./feedback.js');

const route = express.Router();


route.post('/feedback', async (req, res) => {

    const { fb } = req.body;

    try {
        const UserAdded = await feedback.create({
            feedback: fb
        });
        res.status(201).json(UserAdded);
    } catch (error) {
        console.log(error, 'not me must be another one');
        res.status(400).json({ error: error.message });
    }
});


module.exports = route;