const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isUrl: true,
      },
    },
    slug: { //slug is a unique identifier from the api
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newGameData) => {
        newGameData.password = await bcrypt.hash(newGameData.password, 10);
        return newGameData;
      },
      beforeUpdate: async (updatedGameData) => {
        updatedGameData.password = await bcrypt.hash(updatedGameData.password, 10);
        return updatedGameData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Game",
  }
);

module.exports = Game;
