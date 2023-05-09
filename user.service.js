const users = [];

function createUsers(req, res) {
    const body = req.body;
    const email = body.email;

    const user = users.find(x => x.email === email);

    if(user === undefined) {
        users.push(body);
        res.send(body);
    }

    else {
        res.send("User already exists");
    }
}

function getUsers(req, res) {
    res.send(users);
}

module.exports.createUsers = createUsers;
module.exports.getUsers = getUsers;