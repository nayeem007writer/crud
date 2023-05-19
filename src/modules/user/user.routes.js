const { getUsers, getUser, createUsers, updateUsers, deleteUser, login } = require('./user.controller');
const validate = require('../core/middleware/validate');
const { createSchema, userUpdateSchema } = require('./user.schema');
const authenticate = require('../core/middleware/authenticate'); 

function userRoutes (app) {
    app.route('/users')
        .post(validate(createSchema), createUsers)
        .get(getUsers);

    app.route('/users/:email')
        .patch( authenticate, validate(userUpdateSchema), updateUsers)
        .get(getUser)
        .delete(deleteUser);

    app.route('/users/login')
        .post(login);    
}

module.exports = userRoutes;