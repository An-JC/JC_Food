 const User = require('../models/User');
 const bcrypt = require('bcryptjs');
 
 exports.signupController = async (req, res) => {
        //destructure incoming user data
        //Ham nay no se check xem neu ma cai email trung voi cai nao trong db thi no se tra ve 1 error
        //Con khong thi no se tao ra 1 user moi
    const {username, email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }

        const newUser = new User();
        newUser.username = username;
        newUser.email = email;   
        
        //ma hoa password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        res.json({
            successMessage : 'User created successfully',
        });
        //no se cho doi va luu user vao db
    }catch(err){
        console.log('Signup error: ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};

exports.signinController = async (req, res) => {
    console.log('inside signinController');
};