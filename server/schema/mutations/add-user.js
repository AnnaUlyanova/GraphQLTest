const {
    GraphQLInputObjectType
} = require ('graphql');

const UserType  = ('../types/');
module.exports =  {
    type: UserType,
    args: {
        input: {type: new GraphQLNonNull(UserInputType)}
    },
    resolve () {

    }

}