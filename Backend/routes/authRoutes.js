const {Router} = require('express');
const router = Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const maxAge = 5 * 24 * 60 * 60
const createJWT = id => {
    return jwt.sign({ id }, 'chatroom secret', {
        expiresIn: maxAge
    });
    
router.post('/signup',async (req,res)=>{
    const{email,password} = req.body;
    try {
        const user = await User.create({ name, email, password });
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json({ errors });
    }
    
});