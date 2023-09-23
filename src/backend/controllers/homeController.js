import postSchema from "../models/postSchema";



// Mostrar la página de inicio y listar publicaciones destacadas
const homeController = async (req, res, next) => {
  try {
    // Obtenemos todas las publicaciones desde la base de datos
    const posts = await postSchema.findAll();

    // Renderizamos la vista de inicio (home.ejs) y pasar los datos de las publicaciones
    res.render('pages/home', { posts });
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error);
    res.status(500).send('Error interno del servidor');
  }

  next();
  
};


export default homeController;
