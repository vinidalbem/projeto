const Sequelize = require("sequelize");

const db = new Sequelize("test", "admin", "pass1234", {
    host: "database-1.c5wcdjp4tcg5.sa-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306
});

db.authenticate().then(function(){
    console.log("Conectado ao banco de dados")
}).catch(function(err){
    console.log("Erro ao se conectar com banco de dados! "+err)
})

module.exports = db