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

const createWishesTable = "CREATE TABLE IF NOT EXISTS wishes (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar, 'gifts' varchar, FOREIGN KEY(username) REFERENCES users(username))"
db.exec(createWishesTable);

//db.exec("INSERT INTO wishes (username, gifts) VALUES ('usernames3', 'fakeGift');");

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
	try{    
                db.exec(insert);
        } catch (error) {
		res.status(200).send("Username already taken.");
		return        
	} 
	res.status(200).send("Created user: " +  req.params.username + ": " + req.params.password);
})

app.get('/app/clearDB/', (req, res) => {
	db.exec("DROP TABLE wishes");
	db.exec("CREATE TABLE IF NOT EXISTS wishes (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar, 'gifts' varchar, FOREIGN KEY(username) REFERENCES users(username))");
	db.exec("DROP TABLE users");
        const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar type UNIQUE, 'password' varchar);"
        db.exec(createUserTable)	
	res.status(200).send("you deleted all rows in table.");
})

app.get('/app/viewDB/', (req, res) => {
        const stmt = db.prepare('SELECT * FROM users');
        let row = stmt.all();
        console.log(row); 

	const stmt2 = db.prepare('SELECT * FROM wishes');
	let row2 = stmt2.all();
	console.log(row2);
	res.status(200).send("Viewing Database");
})

app.get('/app/viewProfile/:username/:password/', (req, res) => {
	
	db.exec("SELECT COUNT(*) FROM users WHERE username = '" + req.params.username + "' AND password = '" + req.params.password + "';");
	const stmt = db.prepare("SELECT COUNT(*) FROM users WHERE username = '" + req.params.username + "' AND password = '" + req.params.password + "';");		
});

app.use(function(req,res){
    res.status(404).send("404 NOT FOUND");
});

app.listen(port, () => {
	console.log("App is live on 8080");
});
