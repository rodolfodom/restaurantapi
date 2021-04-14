const { Router } = require("express"),
  router = Router();

router.get("/", (req, res)=>{
    try {
    const db = await connectDB(),
      categories = await db.collection("categories").find({}).toArray();
    res.json(categories);
  } catch (err) {
    res.send("No se pudieron cargar las categorias");
  }
});