const express = require('express');
const router = express.Router();
const model = require('../models/model');

// Get all curtains
router.get('/', async (req, res) => {
  try {
    const curtains = await model.getAllCurtains();
    res.json(curtains);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve curtains' });
  }
});

// Get test route
router.get('/test', async (req, res) => {
  try {
    console.log("Test route accessed!");
    res.send("test");
  } catch (error) {
    console.error("Error in /test route:", error);
    res.status(500).json({ message: 'Failed to retrieve curtains' });
  }
});

// Create a new curtain
router.post('/', async (req, res) => {
  try {
    const { name, description, imageUrl, price } = req.body;

    // Validate if all required fields are present in the request body
    if (!name || !description || !imageUrl || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new curtain in Firestore
    const newCurtainId = await model.createCurtain({ name, description, imageUrl, price });

    res.status(201).json({ id: newCurtainId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create a new curtain' });
  }
});

// Delete a curtain by ID
router.delete('/:id', async (req, res) => {
  try {
    const curtainId = req.params.id;
    console.log('Received DELETE request for curtain with ID:', curtainId);

    // Delete the curtain by ID
    await model.deleteCurtainById(curtainId);

    res.json({ message: 'Curtain deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete the curtain' });
  }
});


module.exports = router;
