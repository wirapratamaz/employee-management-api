const express = require('express');
const router = express.Router();
const cutiController = require('../controllers/cutiController');

/**
 * @swagger
 * /cuti:
 *   get:
 *     summary: Returns the list of all the leaves
 *     tags: [Cuti]
 *     responses:
 *       200:
 *         description: The list of the leaves
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cuti'
 */
router.get('/', cutiController.getAllCuti);

/**
 * @swagger
 * /cuti:
 *   post:
 *     summary: Create a new leave
 *     tags: [Cuti]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cuti'
 *           example:
 *             nomorInduk: '123456'
 *             tanggalCuti: '2022-01-01'
 *             lamaCuti: 3
 *             keterangan: 'Personal leave'
 *     responses:
 *       200:
 *         description: The leave was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cuti'
 */
router.post('/', cutiController.createCuti);

/**
 * @swagger
 * /cuti/{id}:
 *   put:
 *     summary: Update a leave
 *     tags: [Cuti]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The leave id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cuti'
 *           example:
 *             nomorInduk: '123456'
 *             tanggalCuti: '2022-01-02'
 *             lamaCuti: 4
 *             keterangan: 'Updated leave'
 *     responses:
 *       200:
 *         description: The leave was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cuti'
 */
router.put('/:id', cutiController.updateCuti);

/**
 * @swagger
 * /cuti/{id}:
 *   delete:
 *     summary: Delete a leave
 *     tags: [Cuti]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The leave id
 *     responses:
 *       200:
 *         description: The leave was successfully deleted
 */
router.delete('/:id', cutiController.deleteCuti);

module.exports = router;
