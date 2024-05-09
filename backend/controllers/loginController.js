import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";
import Seller from "../models/sellerModel.js";
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
  const { email, password } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);

  try {
    let user = await User.findOne({ email });
    let admin = await Admin.findOne({ email });
    let seller = await Seller.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({ userType: 'User' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        res.status(200).json({ userType: 'Admin' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else if (seller) {
      const isMatch = await bcrypt.compare(password, seller.password);
      if (isMatch) {
        res.status(200).json({ userType: 'Seller' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
