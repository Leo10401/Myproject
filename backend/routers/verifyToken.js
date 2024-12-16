const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {

    const token = req.headers['x-auth-token'];
    console.log(token);
    if(!token) return res.status(403).json({message : 'token not found'})

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {

        if(err){
            res.status(403).json(err);
        }else{
            req.user = payload;
            next();
        }
    })
}

module.exports = verifyToken;