const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/db/dbConnect')
const {userRegisterCtrl} = require('./controllers/users/usersCtrl')


const app = express();
dotenv.config()

//DB
dbConnect()


//middleware
app.use(express.json())

//custom middleware
const blogger = (req, res, next) => {
    console.log('I am a blogger')

    next()
}

//2. Usge
app.use(blogger)


//Register
app.post('/api/users/register', userRegisterCtrl)

//Login
app.post('/api/users/login', (req, res, next)=>{
    //business logic
    res.json({user: 'User Login'})
})

//fetch all users
app.get('/api/users', (req, res, next)=>{
    //business logic
    res.json({user: 'Fetch all users'})
})

// server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on port ${PORT}`))

//81XCm9g5ire1XEDx