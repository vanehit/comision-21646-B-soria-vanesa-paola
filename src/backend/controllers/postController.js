import postSchema from '../models/posts';

// Controller para obtener todas las publicaciones
export const getAllPostsController = async (req, res) => {
  try {
    const posts = await postSchema.findAll();
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controller para crear una nueva publicación
export const createPostController = async (req, res) => {
  try {
    const newPost = await postSchema.create(req.body);
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controller para actualizar una publicación existente
export const updatePostController = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postSchema.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }

    await post.update(req.body);

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controller para eliminar una publicación
export const deletePostController = async (req, res) => {
  const { id } = req.params;
  try {
    const postDeleted = await postSchema.destroy({
      where: {
        id: id,
      },
    });

    if (!postDeleted) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }

    return res.status(200).json({ message: 'Publicación eliminada' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
