const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const rootIndex = require("./src/routes/index");
const routerUsers = require("./src/routes/users");
const routerProducts = require("./src/routes/product");
const routerInProducts = require("./src/routes/productins");
const routerOutProducts = require("./src/routes/productouts");
const auth = require("./src/routes/auths");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());


app.use("/", rootIndex);
app.use("/api/v1/user", routerUsers);
app.use("/api/v1/product", routerProducts);
app.use("/api/v1/productin", routerInProducts);
app.use("/api/v1/productout", routerOutProducts);
app.use("/api/v1/auth", auth);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
