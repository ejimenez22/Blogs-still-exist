const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: Datatypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        post_url: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }, 
        user_id: {
            type: Datatypes.INTERGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;