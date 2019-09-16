const fs = require('fs')
const Sequelize = require('sequelize')
const db = {}
sequelize = new Sequelize('icsocialwebtest', 'RedArrow@icsocial-mysql-preprod' , 'Password$$11' , {
  host: 'icsocial-mysql-preprod.mysql.database.azure.com',
  dialect: 'mysql',
  ssl: true,
  operatorsAliases: false,
  dialectOptions: {
    ssl : {
        rejectUnauthorized : false,
        cert:fs.readFileSync('./certs/BaltimoreCyberTrustRoot.crt.pem').toString()
    }
  },
  pool: {
    max: 100,
    min: 0,
    acuire: 3000,
    idle: 10000
  },
})

sequelize.sync().then(function() {
  console.log("Database Connection Successful");
}, function(err) {
  console.log(err);
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db