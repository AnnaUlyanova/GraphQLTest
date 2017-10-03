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
            resolve: () => 'Deeksha'
        },
        lastName: {
            type: GraphQLString,
            resolve: () => 'Sharma'
        }
    }
});

const userSchema = new GraphQLSchema({
    query: RootQueryType
    // mutation:
});

module.exports = userSchema;
