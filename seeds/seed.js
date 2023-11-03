const sequelize = require("../config/connection");
const { Comment, Game, Post, User } = require("../models");

const commentData = require("./commentData.json");
const gameData = require("./gameData.json");
const postData = require("./postData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Game.bulkCreate(gameData, {
    returning: true,
  });

  await Post.bulkCreate(postData, {
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
