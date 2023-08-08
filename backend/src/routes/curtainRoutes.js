// routes/curtainRoutes.js
const express = require('express');
const router = express.Router();
const Curtain = require('../models/model');

// Get all curtains
router.get('/', async (req, res) => {
  try {
    const curtains = await Curtain.find();
    res.json(curtains);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve curtains' });
  }
});

router.get('/hello', async (req, res) => {
    try {
      console.log("Test route accessed!");
      res.send("Mustafa");
    } catch (error) {
      console.error("Error in /test route:", error);
      res.status(500).json({ message: 'Failed to retrieve curtains' });
    }
  });
  

// Create a new curtain
router.post('/', async (req, res) => {
  try {
    const newCurtain = await Curtain.create(req.body);
    res.status(201).json(newCurtain);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create a new curtain' });
  }
});

module.exports = router;
