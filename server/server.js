const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json(), cors());

const database = {
	users: [
		{
			id: 123,
			name: 'john',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
		{
			id: 124,
			name: 'sally',
			email: 'sally@gmail.com',
			password: 'thisissally',
			entries: 3,
			joined: new Date()
		}
	]
};

app.get('/', (req, res) => {
	res.json(database.users);
});

app.post('/signin', (req, res) => {
	if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
		res.json(database.users[0]);
	} else {
		res.status(400).json('error logging in!');
	}
});

app.post('/register', (req, res) => {
	if (req.body.email && req.body.password && req.body.name) {
		const { email, password, name } = req.body;
		database.users.push({
			id: database.users[database.users.length - 1].id + 1,
			name: name,
			email: email,
			password: password,
			entries: 0,
			joined: new Date()
		});
		res.json(database.users[database.users.length - 1]);
	} else {
		res.status(400).json('error trying to register');
	}
});

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	let found = false;
	database.users.map((user) => {
		if (user.id.toString() === id) {
			found = true;
			return res.json(user);
		}
	});
	if (!found) {
		res.status(404).json('could not find that user');
	}
});

app.put('/image', (req, res) => {
	const { id } = req.body;
	let found = false;
	database.users.map((user) => {
		if (user.id === id) {
			found = true;
			user.entries++;
			return res.json(user.entries);
		} else {
			res.status(400).json('could not find that user');
		}
	});
});

app.listen(3000, () => {
	console.log('its working');
});
