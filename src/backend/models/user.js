import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const UserModel = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;
