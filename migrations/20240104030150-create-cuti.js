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
    await queryInterface.createTable('Cutis', {
      nomorInduk: {
        type: Sequelize.STRING,
        references: {
          model: 'Karyawans',
          key: 'nomorInduk'
        }
      },
      tanggalCuti: {
        type: Sequelize.DATEONLY
      },
      lamaCuti: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Cutis');
  }
};
