const insertDocument = async function (db, callback) {
  // Get the documents collection
  const collection = db.collection('messages');
  // Insert one documents
  let result;
  try {
    result = await collection.insertOne([{ content: "testmesage", authorid: false, timestamp: Date.now() }]);
  } catch(e) {
    console.log(e);
  }
  console.log(result); // acknowledged ?
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
    await client.close();
    return result;
};

module.exports = {insertDocument, findDocuments};