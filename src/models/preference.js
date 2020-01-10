export default (sequelize, DataTypes) => {
  const Preference = sequelize.define("preference", {
    description : {
      type      : DataTypes.STRING,
      allowNull : false
    }
  });

  Preference.associate = models => {
    Preference.hasMany(models.preferencePerAppUser, {
        foreignKey:{
            name        :   'id_preference',
            field       :   'id_preference',
        },
            as          :   'preferencePerAppUser',
            onDelete    :   'CASCADE',
            onUpdate    :   'CASCADE'
    })
}

  return Preference;
};
