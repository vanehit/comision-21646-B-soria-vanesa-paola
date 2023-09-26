import express from 'express';
import { validator } from '../middlewares/validator.js';
import { createPostSchema, editPostSchema } from "../models/schemas/postSchema.js";
import { createPostController, deletePostController, getAllPostsController, updatePostController } from '../controllers/postController.js';

const postRouter = express.Router();

// Ruta para obtener todas las publicaciones
router.get('/', getAllPostsController);

// Ruta para crear una nueva publicación
router.post('/', createPostSchema, validator, createPostController);

// endpoint para modificar una publicación
router.put('/:id', editPostSchema, validator, updatePostController);

// Ruta para eliminar una publicación
router.delete('/:id', validator, deletePostController );

export default postRouter;
