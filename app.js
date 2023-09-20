import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; // Importa 'dirname' directamente
import path from 'path'; // Importa 'path' directamente
import { router as indexRoutes } from './src/routes/homeRoutes.js';
import { router as videosRoutes } from './src/routes/videosRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar las rutas en la aplicación
app.use('/', indexRoutes);
app.use('/videos', videosRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Resto de la configuración y código

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
