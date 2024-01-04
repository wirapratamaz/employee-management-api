const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const karyawanRoutes = require('./routes/karyawan');
const cutiRoutes = require('./routes/cuti');

const app = express();
const port = 3001;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Employee Management API",
      description: "Employee Management API Information",
      contact: {
        name: "Wira Pratama"
      },
      servers: ["http://localhost:3001"]
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());

// Routes
app.use('/karyawan', karyawanRoutes);
app.use('/cuti', cutiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;