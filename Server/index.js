const express = require('express');
const { MongoClient } = require('mongodb');
const api = require('./api'); // Import the api.js file

const app = express();
const PORT = process.env.PORT || 3001;

const uri =
	'mongodb+srv://paigetetz:EqayKBzPhOEds24m@pktportfolio.a2yapa6.mongodb.net/projects';
const dbName = 'projects';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let db; // Declare the 'db' variable globally

async function connectToDatabase() {
	await client.connect();
	db = client.db(dbName); // Assign the database object to the global 'db' variable
}

app.use('/api', api);
app.get('/', (req, res) => {
	res.send('Hello from the Express server!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectToDatabase()
		.then(() => console.log('Connected to MongoDB'))
		.catch((err) => console.error('Failed to connect to MongoDB:', err));
});
