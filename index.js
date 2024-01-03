const express = require('express');
const bodyParser = require('body-parser');
const karyawanRoutes = require('./routes/karyawan');
const cutiRoutes = require('./routes/cuti');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/karyawan', karyawanRoutes);
app.use('/cuti', cutiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
