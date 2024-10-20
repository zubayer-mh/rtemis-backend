const { User } = require('../database/models/modelDefinitoins')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body?.userInfo;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        const user = await newUser.save();
        const token = jwt.sign({ user }, process.env.SECRET_KEY, {
            expiresIn: '1h',
        });
        res.status(201).json({ token, message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Registration failed' });
    }
}


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body?.userInfo;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ user }, process.env.SECRET_KEY, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = {
    loginController,
    signupController
}