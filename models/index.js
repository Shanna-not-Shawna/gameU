//*relationships
const User = require("./User");
const Post = require("./Post");
const Game = require("./Game");
const Comment = require("./Comment");



// Post.belongsTo(User, {
//   foreignKey: "user_id"
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
//   onDelete: "CASCADE"
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE"
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id"
// });

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Game.hasMany(Post, {
  foreignKey: "game_id",
  onDelete: "CASCADE"
});
Post.belongsTo(Game, {
  foreignKey: "game_id"
});

module.exports = { User, Post, Comment, Game };