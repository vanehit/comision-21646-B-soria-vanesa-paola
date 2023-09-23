import postSchema from '../models/postSchema';

// Mostrar una lista de todas las publicaciones
const getAllPostsController = async (req, res) => {
  try {
    const posts = await postSchema.findAll();
    res.render('pages/posts', { posts });
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Mostrar el formulario para crear una nueva publicación
const showCreateFormController = (req, res) => {
  res.render('pages/create-post');
};

// Crear una nueva publicación
const createPostController = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = await postSchema.create({ title, content });
    res.redirect('/posts'); // Redirigir a la lista de publicaciones
  } catch (error) {
    console.error('Error al crear una nueva publicación:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Mostrar el formulario para editar una publicación existente
const showEditFormController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await postSchema.findByPk(postId);

    if (!post) {
      return res.status(404).send('Publicación no encontrada');
    }

    res.render('pages/edit-post', { post });
  } catch (error) {
    console.error('Error al obtener la publicación para editar:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar una publicación existente
const updatePostController = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  try {
    const post = await postSchema.findByPk(postId);

    if (!post) {
      return res.status(404).send('Publicación no encontrada');
    }

    post.title = title;
    post.content = content;

    await post.save();
    res.redirect('/posts');
  } catch (error) {
    console.error('Error al actualizar la publicación:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar una publicación existente
const deletePostController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await postSchema.findByPk(postId);

    if (!post) {
      return res.status(404).send('Publicación no encontrada');
    }

    await post.destroy();
    res.redirect('/posts');
  } catch (error) {
    console.error('Error al eliminar la publicación:', error);
    res.status(500).send('Error interno del servidor');
  }
};

export default {
  getAllPostsController,
  showCreateFormController,
  createPostController,
  showEditFormController,
  updatePostController,
  deletePostController,
};
