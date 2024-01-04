const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

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
