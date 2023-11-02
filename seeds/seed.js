const sequelize = require("../config/connection");
const { Comment, Game, Post, User } = require("../models");

const commentData = require("./commentData.json");
const gameData = require("./gameData.json");
const postData = require("./postData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  const games = await Game.bulkCreate(gameData, {
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    returning: true,
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  //   for (const project of projectData) {
  //     await Project.create({
  //       ...project,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
