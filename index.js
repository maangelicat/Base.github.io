const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User.model'); // Ruta correcta al modelo User
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

app.post('/users', async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body;
  
      // Crea un nuevo usuario en la base de datos utilizando el modelo User
      const user = await User.create({
        firstName,
        lastName,
        email
      });
  
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el usuario' });
    }
  });

app.listen(3000, () => {
console.log('Servidor Express en funcionamiento en el puerto 3000');
});


