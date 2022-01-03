const {UsersList, movies} = require('../Data');
const _ = require('lodash');
const resolvers = {
    Query : {
        // users(){
        //     return UsersList;
        // }, 
        // or 
        users : () => {
            return UsersList;
        },
        user : (parent,args) => {
            const id = args.id;
            const user = _.find(UsersList,{id:Number(id)});
            return user;
        },
        movies : () => {
            return movies
        },
        movie : (parent,obj) => {
            const movie = _.find(movies,{name:obj.name});
            return movie
        },
    },
    Mutation : {
        createUser : (parent,args) => {
            const user = args.input;
            console.log(user) 
        }
    } 
};

module.exports = {resolvers}