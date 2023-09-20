const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://cdharybibek:Z2WkBBZ7DC8xCYsc@bookstore.ejhy1ye.mongodb.net/bookstore?retryWrites=true&w=majority";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectToMongo;