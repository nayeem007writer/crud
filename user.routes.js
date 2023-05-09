const { getUsers, createUsers } = require('./user.service');

function usersRoutes(app){
app.post('/users', createUsers);

app.get('/users', getUsers);

}

module.exports = usersRoutes;