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

const findDocuments = async function(db, callback) {
  // Get the documents collection
  const collection = db.collection('messages');
  // Find some documents
  let result;
  try {
    result = await collection.find({}).toArray();
  } catch (e) {
    console.log(e);
  }
  console.log(result)
};

module.exports = {insertDocument, findDocuments};