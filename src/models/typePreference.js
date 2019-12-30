// import { DataTypes } from "sequelize/types"

// const sequelize = require("sequelize")
// const uuid      = require("uuid")

// function createModel(connection){
//     const Model = connection.define(
//         "typePreference",
//         {
//             id_T                : {
//                 type            : sequelize.STRING,
//                 allowNull       : false,
//                 primaryKey      : true,
//                 defaultValue    : () => { return uuid }
//             },

//             description     : {
//                 type        : sequelize.STRING,
//                 allowNull   : false
//             }
//         }
//     )

//     Model.associate = models => {
//         Model.hasMany(models.preference,{
//             foreignKey:{
//                 name:'id_P',
//                 field:'id_P'
//             },
//             as:'preference',
//             onDelete:'CASCADE',
//             onUpdate:'CASCADE'
//         })
//     }

//     return Model
// }


export default (sequelize, DataTypes) => {
    const TypePreference = sequelize.define("TypePreference", {
        description     : {
            type        : DataTypes.STRING,
            allowNull   : false
        }
    })

    TypePreference.associate = models => {
        TypePreference.hasMany(models.preference,{
            foreignKey:{
                name:'id_TP',
                field:'id_TP'
            },
            as:'preference',
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        })
    }

    return TypePreference
}