const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
    name:'LightBoxUser',
    fields: {
        firstName : {
            type: GraphQLString,
            resolve () {return 'user1'}
        },
        lastName: {
            type: GraphQLString,
            resolve () {return 'userlastname1'}
        },
        email: {
            type: GraphQLString,
            resolve () { return 'user1@lightbox.co.nz'}
        },
        password: {
            type: GraphQLString,
            resolve () { return 'user1password'}
        }
    }
});


const AddUserMutation = require ('./mutations/add-user');
const RootMutationType = new GraphQLObjectType({
    name: 'AddLightboxUser',
    fields: () => {
        AddUser: AddUserMutation
    }
});


const userSchema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

module.exports = userSchema;
