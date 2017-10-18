const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType
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
    fields: () => ({
        AddUser: AddUserMutation
    })
});



//New Code under test

// const UserType  = require('./types/user');
//
// const UserInputType = new GraphQLInputObjectType({
//     name: 'UserInput',
//     fields: {
//         firstName: {type: GraphQLString},
//         lastName: {type: GraphQLString},
//         email: {type: GraphQLString},
//         password: {type: GraphQLString}
//     }
// });
// //
// const RootMutationType = new GraphQLObjectType({
//     name: 'AddLightboxUser',
//     fields: () => ({
//         AddUser: {
//             type: UserType,
//             description: 'Add a new Lightbox user',
//             args: {
//                 data: {type: new GraphQLNonNull(UserInputType)}
//             },
//             resolve: (value, { data }) => {
//                 return data;
//             }
//         }
//     })
// });



const userSchema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

module.exports = userSchema;
