export default{
    Query: {
        allPreferencePerAppUser: (_, args, { models }) => {
            return models.preferencePerAppUser.findAll()
        }
    },

    Mutation: {
        newPreferencePerAppUser: (_, args, {models}) => {
            const {id_appUser, id_preference} = args;
            const documents = id_preference.map(item => {
                return {
                    id_appUser,
                    ...item
                }
            })
            return models.preferencePerAppUser.bulkCreate(documents)
        }
    }
}