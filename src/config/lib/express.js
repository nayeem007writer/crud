const express = require('express');
const usersRoutes = require('../../modules/user/user.routes');

module.exports = function () {
    const app = express();

    app.use(express.json());

    usersRoutes(app);

    app.set('port', process.env.PORT);

    return app;
}