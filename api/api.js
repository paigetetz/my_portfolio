const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();

const uri =
	'mongodb+srv://paigetetz:EqayKBzPhOEds24m@pktportfolio.a2yapa6.mongodb.net/projects';
const dbName = 'projects';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get('/data', async (req, res) => {
	try {
		await client.connect();
		const db = client.db(dbName);
		const collection = db.collection('projects');

		const data = await collection.find({}).toArray();
		res.json(data);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: 'An error occurred while fetching data from the database',
		});
	}
});

// Export your app as a serverless function
module.exports = app;
