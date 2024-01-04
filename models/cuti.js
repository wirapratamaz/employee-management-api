const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

/**
 * @swagger
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
 *           description: nomor induk karyawan
 *         tanggalCuti:
 *           type: string
 *           format: date
 *           description: tanggal cuti dalam format YYYY-MM-DD
 *         lamaCuti:
 *           type: integer
 *           description: Durasi lama cuti dalam hari
 *         keterangan:
 *           type: string
 *           description: Informasi tambahan mengenai cuti
 *       example:
 *         nomorInduk: '123456'
 *         tanggalCuti: '2022-01-01'
 *         lamaCuti: 3
 *         keterangan: 'Personal leave'
 */
const Cuti = sequelize.define(
  "Cuti",
  {
    nomorInduk: {
      type: DataTypes.STRING,
      references: {
        model: "Karyawans", // relationship to Karyawan model
        key: "nomorInduk",
      },
    },
    tanggalCuti: DataTypes.DATEONLY,
    lamaCuti: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
  },
  {
    modelName: "Cuti",
    tableName: "cutis",
    timestamps: false,
  }
);

module.exports = Cuti;
