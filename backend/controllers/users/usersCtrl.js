const User = require("../../model/user/User");

//-------------------------------------
//Register
//-------------------------------------

const userRegisterCtrl = async (req, res) => {
  //Check if user Exist
  const userExists = await User.findOne({ email: req?.body?.email });

//   if (userExists) throw new Error("User already exists");
  try {
    //Register user
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { userRegisterCtrl };