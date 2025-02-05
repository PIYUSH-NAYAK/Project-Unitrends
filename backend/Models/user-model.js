const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.genToken = async function () {  
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '30d',
            }
        );
    } catch (error) {
        console.log("Error in generating token:", error);
        return null; // Optional: Return null to indicate failure.
    }
 };

const User= mongoose.model('Userdata', userSchema);
module.exports = User;