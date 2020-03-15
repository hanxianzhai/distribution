const Sequelize = require('sequelize');

var db = {};

const db_name = "openlaas";
const db_user = "openlaas";
const db_password = "openlaas123";


const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: '192.168.121.133',
    port: '3306',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false,
});

let models = [
    require('./models/designer_data_directories.js'),
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db[seqModel.name] = seqModel
});

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
