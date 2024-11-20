import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    selected: false,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    selected: false,
  },

  token: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
