#!/usr/bin/env node


import express from 'express';
import database from 'better-sqlite3'

const app = express();
const port = 8080;
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

const db = new database('users.db');
db.pragma('journal_model = WAL');

const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'email' varchar, 'username' varchar, 'password' varchar);"
db.exec(createUserTable);

app.get('/', (req, res) => {
        res.status(200).send("200 OK");
})

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK");
})

app.get('/app/login/', (req, res) => {
	res.status(200).send("200 OK");
})

app.get('/app/register/:email/:username/:password/', (req, res) => {
	let insert = "INSERT INTO users (email, username, password) VALUES ('"+ req.params.email + "'" + ", '" + req.params.username + "', '" + req.params.password + "');"
	db.exec(insert); 
	const stmt = db.prepare('SELECT * FROM users');
	let row = stmt.all();
	console.log(row);	
	res.status(200).send("Created user:" + req.params.email +  req.params.username + req.params.password);
})

app.get('/app/truncate/', (req, res) => {
	db.exec("TRUNCATE TABLE users");
	res.status(200).send("you deleted all rows in table.");
})


app.listen(port, () => {
	console.log("App is live on 8080");
});
