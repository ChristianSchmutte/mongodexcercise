const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MessageSchema = new Schema({
  id: ObjectId,
  content: String,
  auzthorid: Boolean,
  timestamp: Number
});

const Message = mongoose.model('Message', MessageSchema);

const insertDocument = async function (msg) {

  const {content, authorid} = msg;

  const instance = new Message();
  instance.content = content;
  instance.authorid = authorid;
  instance.timestamp = Date.now();

  await instance.save();


  // const message = new Message()

  // // Get the documents collection
  // await client.connect();
  // const db = client.db('messagesdb');
  // const collection = db.collection('messages');
  // const {content, authorid} = msg;

  // let result;
  // try {
  //   result = await collection.insertOne({content, authorid, timestamp: Date.now()});
  //   result = result.ops;
  // } catch(e) {
  //   console.log(e);
  // }
  // console.log(result);
  // return result
};

const findDocuments = async function(client) {
    await client.connect();
    const db = client.db('messagesdb');
    console.log('GET: Connected successfully to server');
    // Get the documents collection
    const collection = db.collection('messages');
    // Find some documents
    let result;
    try {
      result = await collection.find({}).toArray();
      console.log(result)
    } catch (e) {
      console.log(e);
    }
    // console.log(result)
    return result;
};

module.exports = {insertDocument, findDocuments};