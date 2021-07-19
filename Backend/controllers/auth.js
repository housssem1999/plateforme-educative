const User = require("../models/User");

  // @desc    Register user
  exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    try {
        const user = await User.create({
          username,
          email,
          password,
        });
  
        res.status(201).json({
          sucess :true,
          user,
        }); 
      } catch (err) {
      res.status(500).json({
        sucess :false,
        err:err.message,});
      }
    };