const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        firstName:{ type: GraphQLString},
        lastName: { type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    }
});