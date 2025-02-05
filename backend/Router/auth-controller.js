const User = require('../Models/user-model');
const contact = require('../Models/contact-model');
const bcrypt = require('bcryptjs');


const home = (req, res) => {
    try {
        res.status(200).send('HI THERE');
    }
    catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please fill the data' });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        const userCreated = await User.create({ 
            name, 
            email, 
            password: hashedPassword 
        });
        res.status(201).json({
             message: 'User created successfully', 
             token : await userCreated.genToken(),
             userId : userCreated._id.toString()
              });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            msg: "Server error during registration", 
            error: error.message 
        });
    }

};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Please fill the data' });
        }
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ error: 'Create account first' });
        }
        const validPass = await bcrypt.compare(password, userExist.password);

        if (validPass) {
            res.status(200).json({
              message: "Login Successful",
              token: await userExist.genToken(),
              userId: userExist._id.toString(),
            });
          } else {
            res.status(400).json({ message: "Invalid Credentials" });
          }

      
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ message: "Server error during login" });
    }
}


const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill the data' });
        }
        await contact.create({ name, email, message });
        return res.status(201).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({
            msg: "Error processing contact form",
            error: error.message,
        });
    }
}


const authUser = (req,res) =>{
    try {
        // res.status(200).send('HI THERE');
        const userData=req.user;
        // console.log(userData);
        return res.status(200).json({userData});
        
        
        
    } catch (error) {
        console.log('user error', error);
        
    }

  };



module.exports = { home, register, login, contactUs,authUser };