import express from 'express';
import path from 'path';
import cors from 'cors'; 
import { startDb } from './src/backend/config/database.js';
import router from './src/backend/routes/router.js';

// Configuración de las variables de entorno
require('dotenv').config();

const app = express();

// Middleware para analizar JSON
app.use(express.json());
app.use(cors());

// Configura el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));

// Configurar rutas del frontend para servir páginas HTML y recursos estáticos
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Define las rutas
app.use('/', router);

// Manejamos los errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error interno del servidor: ${err.message}`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`El servidor está en funcionamiento en http://localhost:${port}`);
  startDb();
});
