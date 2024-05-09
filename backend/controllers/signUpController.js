import User from "../models/userModel.js";
import Seller from "../models/sellerModel.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password, userType } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
console.log(username);

  try {
    if (userType === 'User') {
        try {
          const user = new User({ username, email, password: hashedPassword });
          await user.save();
          res.status(201).json({ message: 'Signup successful' });
          return user;
        } catch (error) {
          throw error;
        }
    } else if (userType === 'Seller') {
      try {
        const seller = new Seller({ username, email, password: hashedPassword });
        await seller.save();
        res.status(201).json({ message: 'Signup successful' });
        return seller;
      } catch (error) {
        throw error;
      }

    }
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
