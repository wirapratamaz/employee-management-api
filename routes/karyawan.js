const express = require("express");
const router = express.Router();
const karyawanController = require("../controllers/karyawanController");

/**
 * @swagger
 * /karyawan:
 *   get:
 *     summary: Retrieve a list of karyawan
 *     tags: [Karyawan]
 *     responses:
 *       200:
 *         description: A list of karyawan.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Karyawan'
 */
router.get("/", karyawanController.getAllKaryawan);

/**
 * @swagger
 * /karyawan:
 *   post:
 *     summary: Create a new employee
 *     tags: [Karyawan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Karyawan'
 *           example:
 *             nomorInduk: '123456'
 *             nama: 'John Doe'
 *             alamat: '123 Main St'
 *             tanggalLahir: '1990-01-01'
 *             tanggalBergabung: '2022-01-01'
 *     responses:
 *       200:
 *         description: The employee was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Karyawan'
 */
router.post("/", karyawanController.createKaryawan);

/**
 * @swagger
 * /karyawan/{nomorInduk}:
 *   put:
 *     summary: Update an employee
 *     tags: [Karyawan]
 *     parameters:
 *       - in: path
 *         name: nomorInduk
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee's ID number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Karyawan'
 *           example:
 *             nama: 'Jane Doe'
 *             alamat: '456 Main St'
 *             tanggalLahir: '1991-01-01'
 *             tanggalBergabung: '2022-02-01'
 *     responses:
 *       200:
 *         description: The employee was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Karyawan'
 */
router.put("/:nomorInduk", karyawanController.updateKaryawan);

/**
 * @swagger
 * /karyawan/{nomorInduk}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Karyawan]
 *     parameters:
 *       - in: path
 *         name: nomorInduk
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee's ID number
 *     responses:
 *       200:
 *         description: The employee was successfully deleted
 */
router.delete("/:nomorInduk", karyawanController.deleteKaryawan);

module.exports = router;
