const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()

function verifyToken(req, res, next) {
    const bearer = req.header('Authorization');
    if (!bearer) return res.status(401).json({ error: 'Access denied' });
    const token = bearer.split(" ")[1]
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.email = decoded.email;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;