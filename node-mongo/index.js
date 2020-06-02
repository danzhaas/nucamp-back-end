//import node js driver
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

//connects to mongoDB server and callback w client object to access database
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    
    assert.strictEqual(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    //recreated db
    db.dropCollection('campsites', (err, result) => {
        assert.strictEqual(err, null);
        console.log('Dropped Collection', result);

        const collection = db.collection('campsites');

        //inserted new document into db
        collection.insertOne({name: "Breadcrumb Trail Campground", description: "Test"},
        (err, result) => {
            assert.strictEqual(err, null);
            console.log('Insert Document:', result.ops);

            //logs all documents in the campsite collection
            collection.find().toArray((err, docs) => {
                assert.strictEqual(err, null);
                console.log('Found Documents:', docs)

                client.close();
            });
        });
    });
});