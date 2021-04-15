const express = require("express"),
  app = express(),
  port = 4000;

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
