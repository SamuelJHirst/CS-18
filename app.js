var connect = require("connect"),
    serveStatic = require("serve-static"),
    config = require("./config");
connect().use(serveStatic(__dirname)).listen(config.app.port, function(){
    console.log("Listening on Port " + config.app.port);
});