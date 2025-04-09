const User = require("../model/User");
const bcrypt = require("bcryptjs");

const authController = {};

authController.loginWithUserId = async (req, res) => {
  try {
    const { userId, password } = req.body;
    // let user = await User.findOne({ userId });
    let user = await User.findOne({ userId: userId, password: password });
    // if (user) {
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (isMatch) {
    //     const token = await user.generateToken();
    //     return res.statis(200).json({ status: "success", user, token });
    //   }
    // }

    if (user) {
      return res.status(200).json({ status: "success", user });
    }
    // throw new Error("존재하지 않는 회원입니다.");
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

module.exports = authController;
