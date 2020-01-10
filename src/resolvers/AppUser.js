export default {
    Query: {
        allAppUser: (_, args, {models}) =>{
            return models.appUser.findAll()
        }
    },

    Mutation: {
        newAppUser: (_, args, { models }) => {
            return models.appUser.create(args)
        }
    }
}