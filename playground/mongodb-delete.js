const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Users').deleteMany({ name: 'Eric'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a72e28832bfd43a6d285e56")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});