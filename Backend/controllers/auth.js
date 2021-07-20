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

    // @desc    Login user
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if email and password is provided
    if (!email || !password) {
        res.status(400).json({success:false,error:"Please provide email and password"})
    }
  
    try {
      // Check that user exists by email
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        res.status(404).json({success:false,error:"Invalid credentials" })
      }
  
      // Check that password match
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        res.status(404).json({success:false,error:"Invalid credentials" })
      }res.status(200).json({
          success:true,
          token:"tr34f3443fcc",
      });
    } catch (err) {
        res.status(500).json({
            sucess :false,
            err:err.message,});
          }
  };