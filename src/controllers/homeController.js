// Función para mostrar la página de inicio
const homeController = (req, res) => {
  // Datos ficticios de publicaciones destacadas (puedes reemplazar esto con datos reales de tu base de datos o fuente de datos)
  const featuredPosts = [
    {
      title: 'Publicación 1',
      content: 'Contenido de la publicación 1...',
    },
    {
      title: 'Publicación 2',
      content: 'Contenido de la publicación 2...',
    },
    {
      title: 'Publicación 3',
      content: 'Contenido de la publicación 3...',
    },
  ];

  // Renderiza la vista de inicio (home.ejs) y pasa los datos como un objeto
  res.render('pages/home', { featuredPosts });
};

// Exporta la función para que esté disponible en otros archivos
export default homeController;
