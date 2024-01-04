const express = require("express");
const router = express.Router();
const cutiController = require("../controllers/cutiController");

/**
 * @swagger
 * /cuti:
 *   get:
 *     summary: Get a list of all cuti records
 *     tags: [GET Cuti]
 *     responses:
 *       200:
 *         description: List of cuti records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cuti'
 *       500:
 *         description: Server error
 */
router.get("/", cutiController.getAllCuti);

/**
 * @swagger
 * /cuti:
 *  post:
 *      summary: post data cuti
 *      tags: [POST Cuti]
 * components:
 *   schemas:
 *     Cuti:
 *       type: object
 *       required:
 *         - nomorInduk
 *         - tanggalCuti
 *         - lamaCuti
 *         - keterangan
 *       properties:
 *         nomorInduk:
 *           type: string
 *           description: The employee ID
 *           example: "IP06001"
 *         tanggalCuti:
 *           type: string
 *           format: date
 *           description: The start date of the leave
 *           example: "2023-01-01"
 *         lamaCuti:
 *           type: integer
 *           description: The duration of the leave in days
 *           example: 5
 *         keterangan:
 *           type: string
 *           description: Description of the leave
 *           example: "Annual leave"
 */
router.post("/", cutiController.createCuti);

// Update a leave
router.put("/:id", cutiController.updateCuti);

// Delete a leave
router.delete("/:id", cutiController.deleteCuti);

module.exports = router;
