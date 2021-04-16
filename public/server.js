const express = require("express"),
  cors = require("cors"),
  app = express(),
  port = 4000;

//Allow CORS
app.use(cors());
// Routes

const indexRoutes = require("./routes/index.routes.js");
const productsRoutes = require("./routes/products.routes.js");
const categoriesRoutes = require("./routes/categories.routes.js");

//settings
app.set("port", process.env.PORT || port);

//middlewares
app.use(express.json());

app.use(indexRoutes);
app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);

module.exports = app;
