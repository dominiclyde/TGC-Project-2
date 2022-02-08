// SETUP EXPRESS
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let app = express();
app.use(express.json());
app.use(cors());

// connect to the Mongo DB
async function connect() {
    const mongo_url = process.env.MONGO_URI;
    let client = await MongoClient.connect(mongo_url, {
        "useUnifiedTopology": true
    })
    let db = client.db("emergency_reliefs");
    console.log("database connected");
    return db;
}

// ROUTES

async function main() {
    let db = await connect();

    app.get('/emergency', async (req, res) => {
        let emergency = await db.collection('emergency').find().toArray();
        res.json(emergency)
    })

    app.get('/emergency/:title', async (req, res) => {
        let r = await db.collection('emergency').findOne({
            _id: new ObjectId(req.params.title)
        });
        res.json(r);
    })

    app.post('/emergency', async (req, res) => {
        let results = await db.collection('emergency').insertOne({
            title: req.body.title,
            location: req.body.location,
            date: req.body.date,
            type: req.body.type,
            name: req.body.name,
            contact: req.body.contact,
            type2: req.body.type2,
            description: req.body.description,
        })
        res.json(results.ops);
    })

    app.patch('/emergency/:title', async (req, res) => {
        let results = await db.collection('emergency').updateOne({
            '_id': new ObjectId(req.params.id),
        }, {
            '$set': {
                "title": req.body.title,
                "location": req.body.location,
                "date": req.body.date,
                "type": req.body.type,
                "name": req.body.name,
                "contact": req.body.contact,
                "type2": req.body.type2,
                "description": req.body.description,
            }
        })
        res.json({
            'status': true
        })
    })
}


main();

// START SERVER
// note: we set port to 8888 so it won't clash with React
app.listen(8888, () => {
    console.log("server has started")
})