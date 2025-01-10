const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const { registerUser } = require('./controller/User.controller').default

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> {
    res.send('Hello From Node.js')
})

app.post('/user/register', registerUser);

app.listen(PORT, ()=> {
    console.log(`App started on port: ${PORT}`)
})