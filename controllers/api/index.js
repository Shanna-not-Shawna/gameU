const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
<<<<<<< HEAD
//const commentRoutes = require("./commentRoutes");
=======
const commentRoutes = require("./commentRoutes");
const gameRoutes = require("./gameRoutes");
>>>>>>> 1bfad112c71bd26fbff9314ed1ee8435dd1e4d98


router.use("/users", userRoutes);
router.use("/posts", postRoutes);
<<<<<<< HEAD
//router.use("/comments", commentRoutes);
=======
router.use("/comments", commentRoutes);
router.use("/games", gameRoutes);
>>>>>>> 1bfad112c71bd26fbff9314ed1ee8435dd1e4d98

module.exports = router;
