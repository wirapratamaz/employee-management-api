const Karyawan = require('../models/karyawan');

const karyawanController = {
  // Get all Karyawan records
  getAllKaryawan: async (req, res) => {
    try {
      const sortBy = req.query.sortBy || 'nomorInduk'; // sortby nomorInduk
      const order = req.query.order || 'ASC'; // order ASC
      const karyawan = await Karyawan.findAll();
      res.status(200).json(karyawan);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Create a new Karyawan record
  createKaryawan: async (req, res) => {
    try {
      const { nomorInduk, nama, alamat, tanggalLahir, tanggalBergabung } = req.body;
      const newKaryawan = await Karyawan.create({ nomorInduk, nama, alamat, tanggalLahir, tanggalBergabung });
      res.status(201).json({
        message: 'Karyawan created successfully',
        karyawan: newKaryawan
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a Karyawan record
  updateKaryawan: async (req, res) => {
    try {
      const { nomorInduk } = req.params;
      const { nama, alamat, tanggalLahir, tanggalBergabung } = req.body;

      const karyawanToUpdate = await Karyawan.findByPk(nomorInduk);

      if (!karyawanToUpdate) {
        return res.status(404).json({ error: 'Karyawan not found' });
      }

      karyawanToUpdate.nama = nama;
      karyawanToUpdate.alamat = alamat;
      karyawanToUpdate.tanggalLahir = tanggalLahir;
      karyawanToUpdate.tanggalBergabung = tanggalBergabung;

      await karyawanToUpdate.save();
      res.status(200).json({
        message: 'Karyawan updated successfully',
        karyawan: karyawanToUpdate
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a Karyawan record
  deleteKaryawan: async (req, res) => {
    try {
      const { nomorInduk } = req.params;

      const karyawanToDelete = await Karyawan.findByPk(nomorInduk);

      if (!karyawanToDelete) {
        return res.status(404).json({ error: 'Karyawan not found' });
      }

      await karyawanToDelete.destroy();
      res.status(200).json({
        message: 'Karyawan deleted successfully',
        karyawan: karyawanToDelete
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = karyawanController;
