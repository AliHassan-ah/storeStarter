const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { token } = require("morgan");
const privateKey = process.env.JWT_KEY;
const register = async (req, res, next) => {
  console.log("Hellp");
  try {
    const { username, email, phone, password } = req.body;
    console.log("user req", req.body);
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({
        message: "User Already Exists",
      });
    }
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    console.log("User", userCreated);
    res.status(201).json({
      message: `Users ${userCreated.username} registered`,
      token: await userCreated.genToken(),
      user: userCreated,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(404).json({
        success: false,
        message: "Invalid creadetials",
      });
    }
    try {
      const passwordValidation = await bcrypt.compare(
        password,
        isUser.password
      );
      if (!passwordValidation) {
        return res.status(404).send({
          success: false,
          message: "Invalid Creadetials",
        });
      }
      return res.status(200).json({
        token: await isUser.genToken(),
        user: isUser,
        msg: "Login Sucessfully",
        userId: isUser._id.toString(),
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error in Login ",
      error: error,
    });
  }
};
module.exports = { register, login };
