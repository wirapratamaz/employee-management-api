const express = require('express');
const router = express.Router();
const karyawanController = require('../controllers/karyawanController');

// Get all employees
router.get('/', karyawanController.getAllKaryawan);

// Create a new employee
router.post('/', karyawanController.createKaryawan);

// Update an employee
router.put('/:nomorInduk', karyawanController.updateKaryawan);

// Delete an employee
router.delete('/:nomorInduk', karyawanController.deleteKaryawan);

module.exports = router;
