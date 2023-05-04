const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.route");
const { productRouter } = require("./Routes/product.route");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${process.env.port}`);
});
