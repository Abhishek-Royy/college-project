const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 8,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// JWT <- this part is very importent.
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d", // key expiry day
      }
    );
  } catch (error) {
    console.error("Error in JWT..", error);
  }
};

//very importent ->define user model and collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
