import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'Seller' },
  services: [{ type: String }],
  businessName: { type: String },
  location: {
    address: { type: String },
    city: { type: String },
    country: { type: String }
  }
});

const Seller = mongoose.model('Seller', sellerSchema , 'Seller');
export default Seller;
