const { Firestore } = require('@google-cloud/firestore');
 
async function getData() {
  const db = new Firestore();
  const predictionsCollection = await db.collection('predictions').get();

  return predictionsCollection
}
 
module.exports = getData;