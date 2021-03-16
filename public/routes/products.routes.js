const { Router } = require("express"),
  connectDB = require("../database.js"),
  { ObjectID } = require("mongodb");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const db = await connectDB(),
      products = await db.collection("products").find({}).toArray();
    res.json(products);
  } catch (err) {
    res.send("No se pudieron cargar los productos");
  }
});

router.post("/", async (req, res) => {
  const data = {
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      price: req.body.price,
      images: req.body.images,
      category: req.body.category,
    },
    db = await connectDB(),
    answer = await db.collection("products").insertOne(data);
  res.json(answer);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params,
    updateData = {
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      price: req.body.price,
      images: req.body.images,
      category: req.body.category,
    },
    db = await connectDB(),
    answer = await db
      .collection("products")
      .updateOne({ _id: ObjectID(id) }, { $set: updateData });
  console.log(answer);
});

module.exports = router;
