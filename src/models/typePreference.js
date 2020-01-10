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
                name        :   'id_TP',
                field       :   'id_TP',
            },
                as          :   'preference',
                onDelete    :   'CASCADE',
                onUpdate    :   'CASCADE'
        })
    }

    return TypePreference
}