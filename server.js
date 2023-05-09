const express = require('express');
const usersRoutes = require('./user.routes');
const app = express();

app.use(express.json());

usersRoutes(app);

app.listen(3000, (req, res)=>{
    console.log('server listing on port 3000');
})