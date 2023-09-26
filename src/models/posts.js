import { DataTypes, Sequelize } from "sequelize";


export const postModel = Sequelize.define('posts', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    poster: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
})

