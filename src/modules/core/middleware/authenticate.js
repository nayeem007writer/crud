const { findUser } = require('../../user/user.controller');

function authenticate(){
    let { email, token} = req.body;
    let{email: emailFromParams} = req.params;

    email = email || emailFromParams;

    const user = findUser(email);

    if(!user) return res.status(404).send('not found');

    if(user.token !== token) return res.status(401).send('unauthenticated');

    next();
  
};

module.exports = authenticate;