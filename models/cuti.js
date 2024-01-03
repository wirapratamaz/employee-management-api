module.exports = (sequelize, DataTypes) => {
  const Cuti = sequelize.define(
    "Cuti",
    {
      nomorInduk: {
        type: DataTypes.STRING,
        references: {
          model: "Karyawans", // relasi ke model Karyawan
          key: "nomorInduk",
        },
      },
      tanggalCuti: DataTypes.DATEONLY,
      lamaCuti: DataTypes.INTEGER,
      keterangan: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Cuti;
};
