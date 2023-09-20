import express from 'express';

const router = express.Router(); 

// Definir las rutas principales
router.get('/', (req, res) => {
  res.render('pages/home');
});



export { router }; // Exporta el objeto router correctamente
