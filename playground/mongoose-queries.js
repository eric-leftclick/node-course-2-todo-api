const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5a746c3488d64c200c17df2c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

const userId = '5a73d57fb647f99c10127a7d';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));