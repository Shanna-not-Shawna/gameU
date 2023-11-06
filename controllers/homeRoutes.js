const router = require("express").Router();
const { User, Post, Comment, Game
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Game,
          attributes: ["title", "image"],
        },
        {
          model: Comment,

        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    posts.sort((a, b) => new Date(b.id) - new Date(a.id));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//For looking at individual post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User, {
          model: Comment,
          include: [
            User
          ]
        },
        {
          model: Game,
          as: "game",
          attributes: ["title", "image"],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/newpost", withAuth, (req, res) => {

  res.render("newpost");
});


router.get("/login", (req, res) => {
  // If user is logged in, redirect to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});


//withAuth required to view profile
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/game/:id", async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Post
        }
      ],
    });

    const game = gameData.get({ plain: true });
    res.render("game", {
      ...game,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// "/post/:id/comments"???
//TODO still need CommentRoutes
router.get("post/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        User, {
          model: Comment,
          include: [
            User
          ]
        },
        {
          model: Post
        }
      ],
    });

    const comment = commentData.get({ plain: true });
    res.render("post", {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/login", (req, res) => {
  // If user is logged in, redirect to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/createAccount", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("createAccount");
});

module.exports = router;
