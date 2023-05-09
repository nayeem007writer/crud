const { getUsers, getUser, createUsers, updateUsers, deleteUser } = require('./user.controller');

 function userRoutes (app) {
app.route('/users')
.post(createUsers)
.get(getUsers);

app.route('/users/:email')
.patch(updateUsers)
.get(getUser)
.delete(deleteUser);
}

module.exports = userRoutes;