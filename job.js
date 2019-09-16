const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'jobs',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        job_title: {
            type: Sequelize.STRING
        },
        job_name: {
            type: Sequelize.STRING
        },
        job_location: {
            type: Sequelize.STRING
        },
        job_postingURL: {
            type: Sequelize.STRING
        },
        job_postedBy: {
            type: Sequelize.STRING
        },
        job_postedOn: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)