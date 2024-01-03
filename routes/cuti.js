const express = require('express');
const router = express.Router();
const cutiController = require('../controllers/cutiController');

// Get all leaves
router.get('/', cutiController.getAllCuti);

// Create a new leave
router.post('/', cutiController.createCuti);

// Update a leave
router.put('/:id', cutiController.updateCuti);

// Delete a leave
router.delete('/:id', cutiController.deleteCuti);

module.exports = router;
