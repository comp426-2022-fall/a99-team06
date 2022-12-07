#!/usr/bin/env node


import express from 'express';
import database from 'better-sqlite3'

const app = express();
const port = 8080;
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

const db = new database('users.db');
db.pragma('journal_model = WAL');

const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar type UNIQUE, 'password' varchar);"
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

app.get('/app/register/:username/:password/', (req, res) => {
	let insert = "INSERT INTO users (username, password) VALUES ('" + req.params.username + "', '" + req.params.password + "');"
	db.exec(insert); 
	res.status(200).send("Created user: " +  req.params.username + ": " + req.params.password);
})

app.get('/app/truncate/', (req, res) => {
	db.exec("DROP TABLE users");
	const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar type UNIQUE, 'password' varchar);"
	db.exec(createUserTable);
	res.status(200).send("you deleted all rows in table.");
})

app.get('/app/viewDB/', (req, res) => {
        const stmt = db.prepare('SELECT * FROM users');
        let row = stmt.all();
        console.log(row); 
	res.status(200).send("Viewing Database");
})


app.listen(port, () => {
	console.log("App is live on 8080");
});
