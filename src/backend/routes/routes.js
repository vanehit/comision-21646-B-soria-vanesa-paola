import express from 'express';
import validator  from '../middlewares/validator';
import homeController from '../controllers/homeController';
import postController from '../controllers/postController';

const router = express.Router();

// Ruta para la página de inicio (frontend)
router.get('/', homeController );

// Ruta para la página de registro (frontend)
router.get('/signup', (req, res) => {
  // Renderiza la página de registro
  res.render('pages/signup');
});

// Ruta para mostrar una lista de todas las publicaciones
router.get('/posts', postController.getAllPostsController);

// Ruta para mostrar el formulario de creación de una nueva publicación
router.get('/posts/create', postController.showCreateFormController);

// Ruta para crear una nueva publicación
router.post('/posts/create', validator, postController.createPostController);


// Ruta para mostrar el formulario de edición de una publicación existente
router.get('/posts/edit/:id', postController.showEditFormController);

// Ruta para actualizar una publicación existente
router.post('/posts/edit/:id', validator, postController.updatePostController);

// Ruta para eliminar una publicación existente
router.post('/posts/delete/:id', validator, postController.deletePostController);



export default router;
