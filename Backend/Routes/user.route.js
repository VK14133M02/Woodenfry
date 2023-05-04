const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  try {
    let user = await UserModel.find({ email });
    if (user.length > 0) {
      res.send({ msg: "You are Already Registered" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res
            .status(400)
            .send({ msg: "something went wrong", Error: err.message });
        } else {
          const newUser = new UserModel({
            name,
            email,
            mobile,
            password: hash,
          });
          await newUser.save();
          res.status(200).send({ msg: "Register succesful" });
        }
      });
    }
  } catch (err) {
    res.status(400).send({ msg: "something went wrong", Error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ foo: "bar" }, "masai");
          res.send({ msg: "Login successful", Token: token });
        } else {
          res.send({ msg: "Wrong password" });
        }
      });
    } else {
      res.send({ msg: "Register First, You have not Registerd" });
    }
  } catch (err) {
    res.status(400).send({ msg: "something went wrong", Error: err.message });
  }
});

module.exports = { userRouter };
