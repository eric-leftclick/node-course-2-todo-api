const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '5a766b385268c50c16889a4c'}).then((todo) => {

});

Todo.findByIdAndRemove('5a766b385268c50c16889a4c').then((todo) => {
    console.log(todo);
});