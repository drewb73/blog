const jwt = require('jsonwebtoken')




const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: '60d'})
}

module.exports = generateToken