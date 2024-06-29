require('dotenv').config(); // Load environment variables from .env file
const fs = require('fs');
const { MongoClient } = require('mongodb');

// Read environment variables
const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

// Read data from data.json file
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Function to upload data to MongoDB
async function uploadData() {
  const client = new MongoClient(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Select the database and collection
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Insert data into the collection
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted.`);
  } catch (error) {
    console.error('Error uploading data: ', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the uploadData function
uploadData().catch(console.error);