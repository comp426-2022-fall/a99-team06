#!/usr/bin/env node


import express from 'express';
import database from 'better-sqlite3'

const app = express();
const port = 8080;

const db = new database('users.db')
const stmt = db.prepare('SELECT * FROM users');
let row = stmt.get();

if (row === undefined ) {
	const accessUserInit = "CREATE TABLE users (id INTEGER PRIMARY KEY, email VARCHAR, username VARCHAR, password VARCHAR)";
	db.exec(accessUserInit)
} else {
	console.log("User table exists")
}

app.get('/', (req, res) => {
        res.status(200).send("200 OK");
})

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK");
})

app.listen(port, () => {
	console.log("App is live on 8080");
});
