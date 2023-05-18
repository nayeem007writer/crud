const bcrypt = require('bcrypt');

const users = [];

function createUsers(req, res) {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 9);

    const user = users.find(user => user.email === email);

    if(user) return res.status(400).send("User already exists");

    const newUser = {
        firstName,
        lastName,
        email,
        password:hashedPassword
    }
    
    users.push(newUser);


    res.status(201).send(newUser);  

}

function getUsers(req, res) {
    res.status(200).send(users);
}

function updateUsers(req, res) {
    const { email } = req.params;
    const name = req.body.name;

    const user = users.find(user => user.email === email);

    if(!user) return res.status(400).send('credential invalid');
    users.name = name;

    res.status(200).send(user.name);

}

function getUser(req , res){
    const { email } = req.params;

    const user = users.find(user => user.email === email);

    if(!user) return res.status(400).send('credential invalid');
    
    res.status(200).send(user);
}

function deleteUser(req, res ) {
    const { email } = req.params;
    const name = req.body.name;

    const user = users.find(user => user.email === email);

    if(!user) return res.status(400).send('credential invalid');
    const index = users.findIndex( user =>user.email === email);
    users.splice(index, 1);

    res.status(200).send(user);
}

module.exports.createUsers = createUsers;
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.updateUsers = updateUsers;
module.exports.deleteUser = deleteUser;