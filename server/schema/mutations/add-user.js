const {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

const UserType  = require('../types/user');
const saveOp = require('../../db/saveToDb');


const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    }
});



module.exports =  {
    type: UserType,
    args: {
        data: {type: new GraphQLNonNull(UserInputType)}
    },
    resolve: (value, { data }) => {
        console.log('Data received ',data)
        saveOp.save(data)
        return data;
    }
};