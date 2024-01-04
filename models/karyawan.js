const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

/**
 * @swagger
 * components:
 *   schemas:
 *     Karyawan:
 *       type: object
 *       required:
 *         - nomorInduk
 *         - nama
 *         - alamat
 *         - tanggalLahir
 *         - tanggalBergabung
 *       properties:
 *         nomorInduk:
 *           type: string
 *           description: nomor induk karyawan
 *         nama:
 *           type: string
 *           description: nama karyawan
 *         alamat:
 *           type: string
 *           description: alamat karyawan
 *         tanggalLahir:
 *           type: string
 *           format: date
 *           description: tanggal lahir dalam format YYYY-MM-DD
 *         tanggalBergabung:
 *           type: string
 *           format: date
 *           description: tanggal bergabung dalam format YYYY-MM-DD
 *       example:
 *         nomorInduk: '123456'
 *         nama: 'John Doe'
 *         alamat: '123 Main St'
 *         tanggalLahir: '1990-01-01'
 *         tanggalBergabung: '2022-01-01'
 */
const Karyawan = sequelize.define(
  "Karyawan",
  {
    nomorInduk: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalLahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    tanggalBergabung: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    modelName: "Karyawan",
    tableName: "karyawans",
    timestamps: false,
  }
);

module.exports = Karyawan;
