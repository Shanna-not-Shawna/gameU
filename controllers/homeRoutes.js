const router = require("express").Router();

router.get("/test", (req, res) => {
  res.render("homepage");
});



module.exports = router;

