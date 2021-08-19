const express = require('express');
const { getData } = require('./utils.js');

const cors = require('cors');

const app = express();

const globalData = getData();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/all', (req, res) => {
	return res.status(200).send(getData());
});

app.get('/get/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	globalData.forEach(val => {
		if (val.id === Number(id)) return res.status(200).send(val);
	});

	return res.status(404).send({});
});

app.get('/category', (req, res) => {
	const { type } = req.body;
	console.log(type);
	let catData = globalData.filter(val => {
		return val.category === type;
	});
	if (catData.length) {
		return res.status(200).send(catData);
	}
	return res.status(404).send([]);
});

app.listen(port, () => {
	console.log(`server is up on port http://localhost:${port}`);
});
