import express from 'express';

const router = express.Router();

// Definir las rutas relacionadas con videos
router.get('/', (req, res) => {
  res.render('pages/videos');
});

// Definir otras rutas de videos aquí

export { router };
