const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(bodyParser.json(), cors());

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'bradenschiller',
		password: '',
		database: 'smart-brain'
	}
});

app.get('/', (req, res) => {
	res.json(database.users);
});

app.post('/signin', (req, res) => {
	db.select('email', 'hash').from('login').where('email', '=', req.body.email).then((data) => {
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		if (isValid) {
			return db
				.select('*')
				.from('users')
				.where('email', '=', req.body.email)
				.then((user) => {
					res.json(user[0]);
				})
				.catch((err) => res.status(400).json('error profile doesnt exist'));
		}
		res.status(400).json('wrong credientials');
	});
});

app.post('/register', (req, res) => {
	if (req.body.email && req.body.password && req.body.name) {
		const { email, password, name } = req.body;
		const hash = bcrypt.hashSync(password);
		db
			.transaction((trx) => {
				trx
					.insert({
						hash: hash,
						email: email
					})
					.into('login')
					.returning('email')
					.then((loginEmail) => {
						return trx('users')
							.returning('*')
							.insert({
								email: loginEmail[0],
								name: name,
								joined: new Date()
							})
							.then((user) => {
								res.json(user[0]);
							});
					})
					.then(trx.commit)
					.catch(trx.rollback);
			})
			.catch((err) => res.status(400).json('error occured trying to register'));
	}
});

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	db('users')
		.where('id', id)
		.then((user) => {
			if (user.length) {
				res.json(user[0]);
			} else {
				res.status(400).json('user cannot be found');
			}
		})
		.catch((err) => res.status(400).json('error getting user'));
});

app.put('/image', (req, res) => {
	const { id } = req.body;
	db('users')
		.where('id', id)
		.increment('entries', 1)
		.returning('entries')
		.then((entries) => {
			if (entries.length) {
				res.json(entries[0]);
			} else {
				res.status(400).json('unable to find user');
			}
		})
		.catch((err) => res.status(400).json('unable to get entries'));
});

app.listen(3000);
