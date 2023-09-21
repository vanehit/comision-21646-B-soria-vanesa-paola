import express from 'express';
import homeController from '../controllers/homeController.js';

const router = express.Router();

// Ruta principal: Muestra la página de inicio
router.get('/', homeController);

export default router;
