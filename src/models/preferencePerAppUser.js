export default (sequelize, DataTypes) => {
  const PreferencePerAppUser = sequelize.define("preferencePerAppUser", {
    id_preference: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_appUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return PreferencePerAppUser;
};
