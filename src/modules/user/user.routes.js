const { getUsers, getUser, createUsers, updateUsers, deleteUser } = require('./user.controller');
const validate = require('../core/middleware/validate');
const { createSchema } = require('./user.schema'); 

function userRoutes (app) {
    app.route('/users')
        .post(validate(createSchema), createUsers)
        .get(getUsers);

    app.route('/users/:email')
        .patch(updateUsers)
        .get(getUser)
        .delete(deleteUser);
}

module.exports = userRoutes;