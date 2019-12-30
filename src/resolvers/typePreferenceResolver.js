export default {
  Query: {
    allTypePreference: (_, args, { models }) => {
      return models.typePreference.findAll({
        include: [
          {
            model: models.preference,
            as: "preference"
          }
        ]
      });
    }
  },

  Mutation: {
    newTypePreference: (_, args, { models }) => {
      return models.typePreference.create(args, {
        include: [
          {
            model: models.preference,
            as: "preference"
          }
        ]
      });
    }
  }
};
