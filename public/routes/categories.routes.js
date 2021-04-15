const { Router } = require("express"),
  connectDB = require("../database.js");

router = Router();

router.get("/", async (req, res) => {
  try {
    const db = await connectDB(),
      categories = await db.collection("categories").find({}).toArray();
    res.json(categories);
  } catch (err) {
    res.send("No se pudieron cargar las categorias");
  }
});

module.exports = router;
