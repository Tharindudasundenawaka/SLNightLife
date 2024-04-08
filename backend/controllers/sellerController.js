import Seller from '../models/sellerModel.js';

// for Login
export const sellerLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const seller = await Seller.findOne({ email, password });
        
        if (seller) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Login Failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//for Register
export const sellerSignUpController = async (req, res) => {
    try {
        const { username, email, password, userType } = req.body;

        // Create a new user instance
        const newUser = new User({ username, email, password, userType, verified: true });
        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'New User Added Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
