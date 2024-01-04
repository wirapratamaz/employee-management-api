const express = require('express');
const bodyParser = require('body-parser');
const karyawanRoutes = require('./routes/karyawan');
const cutiRoutes = require('./routes/cuti');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Employee Management API',
      version: '1.0.0',
      description: 'API for managing employee and leave data',
      contact: {
        name: 'Ads Digital'
      },
      servers: ['http://localhost:3000']
    }
  },
  // ['.routes/*.js']
  apis: ['index.js', './routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Routes
app.use('/karyawan', karyawanRoutes);
app.use('/cuti', cutiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
