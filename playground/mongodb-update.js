const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('5a72d105b15b83169485413a')
//    }, {
//         $set: {
//             completed: true
//         }
//    }, {
//         returnOriginal: false
//    }).then((result) => {
//     console.log(result);
//    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a72e2a632bfd43a6d285e60')
    }, {
        $set: {
            name: 'Eric'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});