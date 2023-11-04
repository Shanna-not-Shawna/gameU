const router = require("express").Router();
const { Game } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const { title, image } = req.body;
    const newGame = await Game.create({ title, image });

    res.status(200).json(newGame);
  } catch (error) {
    console.error("Error creating a new game:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const GameData = await Game.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!GameData) {
      res.status(404).json({ message: "No Game found with this id!" });
      return;
    }

    res.status(200).json(GameData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;