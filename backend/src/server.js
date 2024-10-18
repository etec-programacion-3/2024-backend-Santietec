const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Prueba la conexión
sequelize.authenticate()
  .then(() => console.log('Conexión a MySQL establecida correctamente.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Importar modelos
const User = require('./models/User')(sequelize);
const Movie = require('./models/Movie')(sequelize);

// Definir relaciones
User.belongsToMany(Movie, { through: 'UserMovies', as: 'myList' });
Movie.belongsToMany(User, { through: 'UserMovies', as: 'likedBy' });

// Sincronizar modelos con la base de datos
sequelize.sync({ force: false })
  .then(() => console.log('Modelos sincronizados con la base de datos'))
  .catch(err => console.error('Error al sincronizar modelos:', err));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});