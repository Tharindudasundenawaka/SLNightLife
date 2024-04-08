import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'User' },
  preferences: {
    activities: [{ type: String }],
    location: { type: String }
  },
  reviews: [{
    activityType: { type: String },
    rating: { type: Number },
    comment: { type: String }
  }],
  notifications: [{
    message: { type: String },
    date: { type: Date, default: Date.now() },
    read: { type: Boolean, default: false }
  }]
});

const User = mongoose.model('User', userSchema);
export default User;