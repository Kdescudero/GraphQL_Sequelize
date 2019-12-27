const sequelize = require("sequelize")
const uuid      = require("uuid")

function createModel(connection){
    const Model = connection.define( "preferense",
        {
            id_P                : {
                type            : sequelize.STRING,
                allowNull       : false,
                primaryKey      : true,
                defaultValue    : () => { return uuid }
            },

            description     : {
                type        : sequelize.STRING,
                allowNull   : false
            },
        }
    )

    Model.associate = models =>{
        Model.hasMany(models.typePreference, {
            foreignKey  : {
                name    : "id_T",
                field   : "id_T"
            }
        })
    }

    return Model
}

module.exports = createModel