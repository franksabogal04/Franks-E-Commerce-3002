const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    id: {
      // define columns
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
