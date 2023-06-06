const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = new Sequelize('basededatos', 'root', '1234', {
host: 'localhost',
 dialect: 'mysql'
});

sequelize
.authenticate()
.then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

// Habilitar CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(3000, () => {
console.log('Servidor Express en funcionamiento en el puerto 3000');
});

