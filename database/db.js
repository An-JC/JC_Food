const { use } = require('express/lib/application');
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Jacob:Thaianbg315@cluster0.b9mby.mongodb.net/jc-food?retryWrites=true&w=majority',     
        {
            useNewUrlParser:true, 
            useUnifiedTopology: true
        }
        );
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err);
    }
};


module.exports = connectDB;