const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('basededatos', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql', // Cambia a 'postgresql', 'sqlite', 'mssql' según el motor de base de datos que estés utilizando
  logging: false // Puedes habilitar el registro de consultas SQL si lo deseas
});

module.exports = sequelize;