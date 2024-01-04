const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

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
