import express from 'express';
import {
  getAllPostsController,
  createPostController,
  updatePostController,
  deletePostController,
} from '../../controllers/postController';
import { validator } from '../middlewares/validator.js';
import { createPostSchema, editPostSchema } from "../models/schemas/postSchema.js";
import { postModel } from "../models/posts.js";
import { userSignupController, userLoginController } from '../controllers/userController';

const router = express.Router();


// Ruta para el registro (signup)
router.post('/signup', userSignupController);

// Ruta para el inicio de sesión (login)
router.post('/login', userLoginController);


// Ruta para obtener todas las publicaciones
router.get('/posts', getAllPostsController);

// Ruta para crear una nueva publicación
router.post('/posts', createPostSchema, validator, createPostController);

// endpoint para modificar una publicación
router.put('/posts/:id', editPostSchema, validator, updatePostController);

// Ruta para eliminar una publicación
router.delete('/posts/:id', validator, deletePostController);

export default router;
