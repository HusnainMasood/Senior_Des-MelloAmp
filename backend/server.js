const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();
//end point
app.get('/', (req, res) => {
	res.send('API is now running');
});

//requesting notes data from back end
app.get('/api/notes', (req, res) => {
	res.json(notes);
});

// app.get('/api/notes/:id', (req, res) => {
// 	const note = notes.find((n) => n.id === req.params.id);
// 	//console.log(req.params);
// 	res.send(note);
// });

// .env assigned PORT or PORT 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
