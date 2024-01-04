'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('karyawans', {
      nomorInduk: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggalLahir: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      tanggalBergabung: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('karyawans');
  }
};
