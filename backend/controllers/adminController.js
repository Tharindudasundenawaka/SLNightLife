import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";

// Register new admin
export const signUpAdmin = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new admin
      const admin = new Admin({
        username,
        email,
        password: hashedPassword,
      });
  
      // Save the admin to the database
      await admin.save();
  
      res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Login admin
  export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the admin by email
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, admin.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Successful login
      res.status(200).json({ message: 'Login successful',userType: 'Admin', admin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  // Function to create initial admin use
  export const createInitialAdmin  = async () => {
    try {
      const existingAdmin = await Admin.findOne({ email: 'admin@gmail.com' });
  
      if (!existingAdmin) {
        const password = 'admin'; 
  
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); 
  
        const admin = new Admin({
          username: 'Admin',
          email: 'admin@gmail.com',
          password: hashedPassword, 
        });
  
        await admin.save();
        console.log('Initial admin user created successfully');
      }
    } catch (error) {
      console.error('Error creating initial admin user:', error);
    }
  };