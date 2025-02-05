const mongoose = require('mongoose');
const URI = "mongodb+srv://Jarvis:1234@codechaos.dgspe.mongodb.net/DB_UT"

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database Connected');
    } catch (error) {
        console.log('Error: ', error.message);
        process.exit(1);    

    }
}
module.exports = connectDB;