const insertDocument = async function (client, msg) {
  // Get the documents collection
  await client.connect();
  const db = client.db('messagesdb');
  const collection = db.collection('messages');
  const {content, authorid} = msg;
  
  let result;
  try {
    result = await collection.insertOne({content, authorid, timestamp: Date.now()});
    result = result.ops;
  } catch(e) {
    console.log(e);
  }
  console.log(result); 
  return result
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