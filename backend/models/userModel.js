import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    cin: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password : { type: String, required: true },
    email: { type: String,  unique: true },
    verifyOtp: { type: String, default: ''},
    verifyOtpExpireAt: { type: Number, default: 0},
    isAccountVerified: { type: Boolean, default: false},
    resetOtp: { type: String, default: ''},
    resetOtpExpireAt: {type: Number, default: 0},
    
}, {timestamps: true});

const userModel = mongoose.model("user", userSchema);

export default userModel;