const express = require("express");
const { ProductModel } = require("../Model/product.model");

const productRouter = express.Router();

productRouter.post("/addproduct", async (req, res) => {
  try {
    let product = new ProductModel(req.body);
    await product.save();
    res.status(200).send({ msg: "New Product has been added" });
  } catch (err) {
    res.status(404).send({ msg: "Someting went wrong", Error: err.message });
  }
});

productRouter.get("/", async (req, res) => {
  const { category, sub_category, brand, page, order } = req.query;
  let s = Number(page - 1) * 20;
  try {
    if (category && sub_category && brand && order) {
      if (order === "asc") {
        let product = await ProductModel.find({
          $and: [
            { category: `${category}` },
            { sub_category: `${sub_category}` },
            { brand: `${brand}` },
          ],
        })
          .sort({ price: 1 })
          .skip(s)
          .limit(20);
        res.send(product);
      } else if (order === "desc") {
        let product = await ProductModel.find({
          $and: [
            { category: `${category}` },
            { sub_category: `${sub_category}` },
            { brand: `${brand}` },
          ],
        })
          .sort({ price: -1 })
          .skip(s)
          .limit(20);
        res.send(product);
      }
    } else if (category && sub_category && brand) {
      let product = await ProductModel.find({
        $and: [
          { category: `${category}` },
          { sub_category: `${sub_category}` },
          { brand: `${brand}` },
        ],
      })
        .skip(s)
        .limit(20);
      res.send(product);
    } else if (category && sub_category && order) {
      if (order === "asc") {
        let product = await ProductModel.find({
          $and: [
            { category: `${category}` },
            { sub_category: `${sub_category}` },
          ],
        })
          .sort({ price: 1 })
          .skip(s)
          .limit(20);
        res.send(product);
      } else if (order === "desc") {
        let product = await ProductModel.find({
          $and: [
            { category: `${category}` },
            { sub_category: `${sub_category}` },
          ],
        })
          .sort({ price: -1 })
          .skip(s)
          .limit(20);
        res.send(product);
      }
    } else if (category && sub_category) {
      let product = await ProductModel.find({
        $and: [
          { category: `${category}` },
          { sub_category: `${sub_category}` },
        ],
      })
        .skip(s)
        .limit(20);
      res.send(product);
    } else if (category) {
      let product = await ProductModel.find({ category: `${category}` })
        .skip(s)
        .limit(20);
      res.send(product);
    } else {
      let product = await ProductModel.find().skip(s).limit(20);
      res.status(200).send(product);
    }
  } catch (err) {
    res.status(404).send({ msg: "Someting went wrong", Error: err.message });
  }
});

module.exports = { productRouter };
