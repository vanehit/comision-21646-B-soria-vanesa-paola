import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const postSchema = sequelize.define('postSchema', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

export default postSchema;
