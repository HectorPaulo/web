const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const usersFilePath = path.join(__dirname, 'src', 'Data', 'users.json');
const beachesFilePath = path.join(__dirname, 'src', 'Data', 'playas.json');
const calificacionesFilePath = path.join(__dirname, 'src', 'Data', 'calificaciones.json');

app.get('/beaches', async (req, res) => {
  try {
    const data = await fs.readFile(beachesFilePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error al leer el archivo de playas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

const getUsers = async () => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer el archivo de usuarios:', error);
    return [];
  }
};

const saveUsers = async (users) => {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error al guardar usuarios en el archivo:', error);
  }
};

app.post('/register', async (req, res) => {
  const { userId, password } = req.body;

  const users = await getUsers();
  const existingUser = users.find(user => user.userId === userId);
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  try {
    const newUser = { userId, password };
    users.push(newUser);
    await saveUsers(users);
    return res.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.post('/login', async (req, res) => {
  const { userId, password } = req.body;

  const users = await getUsers();
  const user = users.find(user => user.userId === userId && user.password === password);

  if (!user) {
    return res.status(400).json({ message: 'ID de usuario o contraseña incorrecta' });
  }

  return res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

const getCalificaciones = async () => {
  try {
    const data = await fs.readFile(calificacionesFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer el archivo de calificaciones:', error);
    return [];
  }
};

const saveCalificaciones = async (calificaciones) => {
  try {
    await fs.writeFile(calificacionesFilePath, JSON.stringify(calificaciones, null, 2));
  } catch (error) {
    console.error('Error al guardar calificaciones en el archivo:', error);
  }
};

app.post('/calificacion', async (req, res) => {
  const { nombrePlaya, userId, calificacion, fechaVisita, comentarios, inscrito } = req.body;

  const calificaciones = await getCalificaciones();
  const existingCalificacion = calificaciones.find(calificacion => (calificacion.fechaVisita === fechaVisita) && (calificacion.nombrePlaya === nombrePlaya));
  if (existingCalificacion) {
    return res.status(400).json({ message: '¡Esta opinión está duplicada!' });
  }

  try {
    const newCalificacion = { nombrePlaya, userId, calificacion, fechaVisita, comentarios, inscrito };
    calificaciones.push(newCalificacion);
    await saveCalificaciones(calificaciones);
    return res.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al registrar calificación:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
