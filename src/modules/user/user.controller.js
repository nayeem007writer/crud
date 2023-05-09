const { string, object } = require('yup');

const users = [];

function createUsers(req, res) {
    const body = req.body;
    const email = body.email;

    const regesterSchema = object().shape({
        email: string()
               .email("this field should be a valid email address")
               .required('this feild must not be empty'),
        
        name: string()
                .min(2, "this feild must be at least 2 characters long")
                .max(30, "this feild must be at most 30 character long")   
                .required('this feild must not be empty'),    
    })

    regesterSchema.validate({ email:email, name:name }, { abortEarly:false })
    .then(function() {
        const user = users.find(user => user.email === email);

        if(user) return res.status(400).send("User already exists");
    
        users.push(body);
        res.status(201).send(body);  

    })
    .catch(function() {
        const errMsg = { path:err.inner[0].path , message:err.inner[0].message };

        res.status(400).send(errMsg);
    });

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