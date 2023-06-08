const Sequelize = require('sequelize');
const sequelize = require('../Sequelize'); // Importa la instancia de Sequelize y la configuración de la conexión

const Persona = sequelize.define('persona', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Direccion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Persona;
