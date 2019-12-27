const sequelize = require("sequelize")
const uuid      = require("uuid")

function createModel(connection){
    const Model = connection.define(
        "preferense",
        {
            id_T                : {
                type            : sequelize.STRING,
                allowNull       : false,
                primaryKey      : true,
                defaultValue    : () => { return uuid }
            },

            description     : {
                type        : sequelize.STRING,
                allowNull   : false
            }
        }
    )

    return Model
}

module.exports = createModel