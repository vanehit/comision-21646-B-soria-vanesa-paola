const { Sequelize } = require("sequelize");


const sequelize = new Sequelize('db_depeoncitosyreinas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  export const startDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }