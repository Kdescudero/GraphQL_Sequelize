export default (sequelize, DataTypes) => {
  const Preference = sequelize.define("preference", {
    description : {
      type      : DataTypes.STRING,
      allowNull : false
    }
  });

  return Preference;
};
