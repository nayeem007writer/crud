module.exports.start = () => {
    const app = require('./express')();

    app.listen(app.get('port'), (req, res)=>{
        console.log(`SERVER LISTING ON PORT => ${app.get('port')}`);
    });
}