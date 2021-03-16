const { Router } = require("express"),
  router = Router();

router.get("/", (req, res) => {
  res.send("welcome to my restaurant API");
});

module.exports = router;
