const router = require("express").Router();
const exampleRoutes = require("./exampleRoutes");
const exampleRoutes2 = require("./exampleRoutes2");

router.use("/users", exampleRoutes);
router.use("/posts", exampleRoutes2);

module.exports = router;
