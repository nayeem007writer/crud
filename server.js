(function () {
    const path = require('path');
    const config = require(path.join(process.cwd(),'./src/config/index'));
    
    config.initEnviromentVariables();


    const app = require('./src/config/lib/app');
    app.start();

})();