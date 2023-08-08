const admin = require('firebase-admin');

const db = admin.firestore();

// Define the collection name (similar to MongoDB collection)
const collectionName = 'curtains';

// Define a function to add a new curtain to Firestore
async function createCurtain(curtainData) {
  try {
    const docRef = await db.collection(collectionName).add(curtainData);
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    throw new Error('Failed to create a new curtain in Firestore');
  }
}

// Define a function to get all curtains from Firestore
async function getAllCurtains() {
  try {
    const snapshot = await db.collection(collectionName).get();
    const curtains = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return curtains;
  } catch (error) {
    throw new Error('Failed to retrieve curtains from Firestore');
  }
}

// Define a function to delete a curtain by its ID from Firestore
async function deleteCurtainById(curtainId) {
  try {
    await db.collection(collectionName).doc(curtainId).delete();
  } catch (error) {
    throw new Error('Failed to delete the curtain from Firestore');
  }
}

module.exports = {
  createCurtain,
  getAllCurtains,
  deleteCurtainById, // Add the deleteCurtainById function to the exports
};
