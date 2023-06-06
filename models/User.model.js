const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Reemplaza './sequelize' con la configuración de tu instancia Sequelize

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;