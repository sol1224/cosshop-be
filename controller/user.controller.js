const User = require("../model/User");

const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { name, userId, password, phoneNumber } = req.body;

    const existUserCheck = await User.findOne({ userId });
    if (!existUserCheck) {
      const newUser = new User({
        name,
        userId,
        password,
        phoneNumber,
      });
      await newUser.save();
      res.status(200).json({ status: "success", data: newUser });
    } else {
      res
        .status(400)
        .json({ status: "fail", message: "이미 존재하는 회원입니다" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = userController;
