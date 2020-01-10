export default (sequelize, DataTypes) => {
    const Appuser = sequelize.define("appUser", {
          email: {
            type        : DataTypes.STRING,
            allowNull   : true,
            unique      : true,
          },
          password: {
            type        : DataTypes.STRING,
            allowNull   : true,
          },
          isEnabled: {
            type        : DataTypes.BOOLEAN,
            allowNull   : true,
          },
          avatar: {
            type        : DataTypes.STRING,
            allowNull   : true,
          },
          phone_number: {
            type        : DataTypes.STRING,
            allowNull   : true,
          },
    })

    Appuser.associate = models => {
      Appuser.hasMany(models.preferencePerAppUser, {
          foreignKey:{
              name        :   'id_appUser',
              field       :   'id_appUser',
          },
              as          :   'preferencePerAppUser',
              onDelete    :   'CASCADE',
              onUpdate    :   'CASCADE'
      })
  }

    return Appuser
}