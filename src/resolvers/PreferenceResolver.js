export default {
  Query: {
    allPreference: (_, args, { models }) => {
      return models.preference.findAll();
    }
  }
};
