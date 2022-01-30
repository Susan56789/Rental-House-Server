// generate token using secret from process.env.JWT_SECRET
var jwt = require("jsonwebtoken");
const { token } = require("morgan");

// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;

  var u = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };

  token = await jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: "5h", // expires in 5 hours
  });

  return token;
}

// return basic user details
function getCleanUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
}

module.exports = {
  generateToken,
  getCleanUser,
};
