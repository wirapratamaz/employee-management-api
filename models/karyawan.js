modulemodule.exports = (sequelize, DataTypes) => {
  const Karyawan = sequelize.define(
    "Karyawan",
    {
      nomorInduk: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
      tanggalLahir: DataTypes.DATEONLY,
      tanggalBergabung: DataTypes.DATEONLY,
    },
    {
      timestamps: false,
    }
  );

  return Karyawan;
};
