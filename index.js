const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User.model'); // Ruta correcta al modelo User
const Persona = require('./models/Persona.model');
const sequelize = new Sequelize('basededatos', 'root', '1234', {
host: 'localhost',
 dialect: 'mysql'
});

const bodyParser = require('body-parser');
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

sequelize
.authenticate()
.then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

// Habilitar CORS

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.post('/users', async (req, res) => {
    try {
        console.log( req , 'Este es mi primer body')
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

  // Ruta GET para obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
      // Obtiene todos los usuarios de la base de datos
      const users = await User.findAll();

      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  });

  app.post('/personas', async (req, res) => {
    let persona
    try {
      // Crea un nuevo registro en la tabla
      req.body[0].forEach(async(personData) => {
        const [nombre, apellido, direccion] = personData;
        console.log(personData, 'dato')
        persona = await Persona.create({Nombre:nombre, Apellido:apellido, Direccion: direccion});
        console.log(nombre, 'Estos son mis nombres')
      });

      res.status(201).json(persona);
    } catch (error) {
      console.error('Error al crear persona:', error);
      res.status(500).json({ error: 'Error en la peticion de personas' });
    }
  });

app.listen(3000, () => {
console.log('Servidor Express en funcionamiento en el puerto 3000');
});