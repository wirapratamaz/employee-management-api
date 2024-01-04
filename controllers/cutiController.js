const Cuti = require('../models/cuti');

const cutiController = {
  getAllCuti: async (req, res) => {
    try {
      const sortBy = req.query.sortBy || 'tanggalCuti'; // sortby tanggalCuti
      const order = req.query.order || 'ASC'; // order ASC
      const cutiRecords = await Cuti.findAll();
      res.status(200).json(cutiRecords);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCuti: async (req, res) => {
    try {
      const { nomorInduk, tanggalCuti, lamaCuti, keterangan } = req.body;
      const newCuti = await Cuti.create({ nomorInduk, tanggalCuti, lamaCuti, keterangan });
      res.status(201).json({ message: 'Cuti created successfully', cuti: newCuti });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateCuti: async (req, res) => {
    try {
      const { id } = req.params;
      const { tanggalCuti, lamaCuti, keterangan } = req.body;

      const cutiToUpdate = await Cuti.findByPk(id);

      if (!cutiToUpdate) {
        return res.status(404).json({ error: 'Cuti not found' });
      }

      cutiToUpdate.tanggalCuti = tanggalCuti;
      cutiToUpdate.lamaCuti = lamaCuti;
      cutiToUpdate.keterangan = keterangan;

      await cutiToUpdate.save();
      res.status(200).json({ message: 'Cuti updated successfully', cuti: cutiToUpdate });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCuti: async (req, res) => {
    try {
      const { id } = req.params;

      const cutiToDelete = await Cuti.findByPk(id);

      if (!cutiToDelete) {
        return res.status(404).json({ error: 'Cuti not found' });
      }

      await cutiToDelete.destroy();
      res.status(200).json({ message: 'Cuti deleted successfully', deletedCutiId: id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = cutiController;
