const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  created: { type: Date, defolt: Date.now },
  VIPstate: { type: Boolean, required: true },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
