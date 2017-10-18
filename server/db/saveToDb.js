// var fs = require('fs');
//
// module.exports = {
//     save: function (firstName, lastName, email, password) {
//         const userObject = {
//             'firstName': firstName,
//             'lastName': lastName,
//             'email': email,
//             'password': password
//         };
//         var userJson = JSON.stringify(userObject);
//         writeToFile(userJson)
//             .then(function (userJsonReturned) {
//                 return userJsonReturned;
//             }).catch(function (error) {
//             console.log(error.message);
//         })
//     },
//
//     writeToFile: function (userJson){
//         fs.writeFile('user.json', userJson, function (err) {
//             if(err) return err;
//             else return userJson;
//         })
//     }
// };



var fs = require('fs');

    exports.save = function (data) {
        const userObject = {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'password': data.password,
        };
        console.log('Writing: ', JSON.stringify(userObject));
        return writeToFile(JSON.stringify(userObject))
    };

    function writeToFile (userJson){
        fs.writeFile('user.json', userJson, function (err) {
            if(err) return err;
            else return userJson;
        })
    }







