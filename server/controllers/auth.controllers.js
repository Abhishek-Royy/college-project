const User = require("../models/user.models");
const bcrypt = require("bcryptjs");

// HOME PAGE
const home = async (req, res) => {
  try {
    res.send("Wellcome to MernSeries using Router bt CodeByAbhishek..");
  } catch (error) {
    console.log("Error found", error);
  }
};

// REGISTRATION PAGE
const registration = async (req, res) => {
  try {
    // req.body <- is very importent, to use the all body data.
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email }); // compare between exist email and new enter email.

    if (userExist) {
      return res.status(400).json({ msg: "Email allready exist" });
    }

    //Usecase of hashcode and bcrypt packege.
    const hashCodeRound = 10;
    const hashPassword = await bcrypt.hash(password, hashCodeRound);

    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    }); //Collect the new user all data

    res.status(200).json({
      msg: "Registration Successfully Done.",
      token: await newUser.generateToken(), // generate the Token from JWT + user.models codebase.
      userId: newUser._id.toString(), // convert our data id into a String.
    }); //Print the newUser data in json format as a msg. & also use JWT token..
  } catch {
    res.status(400).send({ msg: "Page not Found.." });
  }
};

// LOGIN PAGE LOGIC
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    // console.log(userExist);

    if (!userExist) {
      res.status(500).json({ msg: "Please Register First and then Login" });
    }
    const userPassValid = await bcrypt.compare(password, userExist.password);

    if (userPassValid) {
      res.status(200).json({
        msg: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or Password.." });
    }
  } catch (error) {
    res.status(500).json("Error occurd in Login..");
  }
};

module.exports = { registration, login, home };
