const User = require("../Models/user-model");
const jwt = require("jsonwebtoken");




const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized user 1' });
    }

    const tokenString = token.replace('Bearer', '').trim();
    // console.log(token);

    try {
        // console.log("reach here 1")
        const decoded = jwt.verify(tokenString, process.env.SECRET_KEY);
        // console.log("reach here 2")
        // console.log("decoded done");


        const userData = await User.findOne({ email: decoded.email }).select('-password -phone');
        // console.log("decode", userData);
            
        // console.log("reach here 3")




        req.user = userData;
        req.token = tokenString;
        req.userId = decoded.userId;
        next();

    } catch (error) {
        console.error('Token not found');
        console.error('Error in token verification:', error.message);

    }

    // {message: 'Login Successful', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…Y0MX0.VE1pZIFfppNEltuNdZ9i_oSfUotsG5sibmnVYN8pgUU
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…Y0MX0.VE1pZIFfppNEltuNdZ9i_oSfUotsG5sibmnVYN8pgUU
    //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzk2MzdiMzg3Y2RkYWEyZmZkNjVkMDEiLCJlbWFpbCI6Im5heWFrQGdtYWlsLmNvbSIsImlhdCI6MTczNzg5NzkwNywiZXhwIjoxNzQwNDg5OTA3fQ.L5TuvfudCjn9bKwoImVsghv91aYeTwBXVn4ZnI2upXc



};

module.exports = authMiddleware;