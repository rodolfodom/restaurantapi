if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const app = require("./server");

function main() {
  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
}

main();
