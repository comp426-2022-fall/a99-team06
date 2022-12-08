#!/usr/bin/env node


import express from 'express';
import database from 'better-sqlite3'
import fs from 'fs'
import morgan from 'morgan'

const app = express();
const port = 8080;
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

const accesslog = fs.createWriteStream('./access.log');
app.use(morgan('combined', {stream:accesslog}));

const db = new database('users.db');
db.pragma('journal_model = WAL');

const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar type UNIQUE, 'password' varchar);"
db.exec(createUserTable);

const createWishesTable = "CREATE TABLE IF NOT EXISTS wishes (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar, 'gifts' varchar, FOREIGN KEY(username) REFERENCES users(username))"
db.exec(createWishesTable);

//db.exec("INSERT INTO wishes (username, gifts) VALUES ('usernames3', 'fakeGift');");

//Endpoint for default without the /app/ added.
app.get('/', (req, res) => {
	res.status(200).send(JSON.stringify({"message": "The API Works! Welcome to gift wish list! (200)"}));        
})

//Main default endpoint of the app
app.get('/app/', (req, res) => {
	res.status(200).send(JSON.stringify({"message": "The API Works! Welcome to gift wish list! To get started, go to /app/register endpoint. (200)"}));
})

//Endpoint where a user can learn to register an account in database.
app.get('/app/register/', (req, res) => {
	res.status(200).send(JSON.stringify({"message": "Welcome to the register page! To create an account, you must add your username/password to the url body like so: localhost:8080/app/register/yourUsername/yourPassword/. (200)"}));
})

//Endpoint for user to register an account in database with their username and password of choice. An account will be created in database here if successful.
app.get('/app/register/:username/:password/', (req, res) => {
	let insert = "INSERT INTO users (username, password) VALUES ('" + req.params.username + "', '" + req.params.password + "');"
	try{    
                db.exec(insert);
        } catch (error) {
		res.status(200).send(JSON.stringify({"message": "Username already taken. (200)"}));
		return        
	} 
	res.status(200).send(JSON.stringify({"message": "Created user: " +  req.params.username + ": " + req.params.password + " (200)"}));
})

//Endpoint for user to add a gift to their account. They must provide credentials and the gift to be added as last argument.
app.get('/app/addGift/:username/:password/:gifts/', (req, res) => {
	const stmt = db.prepare("SELECT COUNT(*) AS count FROM users WHERE username='" + req.params.username + "' AND password='" + req.params.password + "'");
	let row = stmt.get();
	
	if (row.count == 1) {
		let insert = "INSERT INTO wishes (username, gifts) VALUES ('" + req.params.username + "', '" + req.params.gifts + "');"
		db.exec(insert);
		res.status(200).send(JSON.stringify({"message": "Successfully added " + req.params.gifts + " for " +  req.params.username + " (200)"}));
	} else {
		res.status(200).send(JSON.stringify({"message": "Incorrect username or password (200)"}));
	}
})

//Endpoint for user to delete a gift to their account. They must provide credentials and the gift to be deleted.
app.get('/app/deleteGift/:username/:password/:gifts/', (req, res) => {
	        const stmt = db.prepare("SELECT COUNT(*) AS count FROM users WHERE username='" + req.params.username + "' AND password='" + req.params.password + "'");
	        let row = stmt.get();

	        if (row.count == 1) {
			const stmt2 = db.prepare("SELECT COUNT(*) AS count FROM wishes WHERE username='" + req.params.username + "' AND gifts='" + req.params.gifts + "'");
			let row2 = stmt.get();
			if (row2.count > 0) {
				let del = "DELETE FROM wishes WHERE username='" + req.params.username + "' AND gifts='" + req.params.gifts + "';"
				db.exec(del);
	                	res.status(200).send(JSON.stringify({"message": "Successfully deleted wish for " +  req.params.username + " (200)"}));
			} else {
	                	res.status(200).send(JSON.stringify({"message": "That wish does not exist for " +  req.params.username + " (200)"}));
			}
	        } else {
	                res.status(200).send("Incorrect username or password");
	        }
})

//Endpoint for testing. This clears the users and gifts tables.
app.get('/app/clearDB/', (req, res) => {
	db.exec("DROP TABLE wishes");
	db.exec("CREATE TABLE IF NOT EXISTS wishes (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar, 'gifts' varchar, FOREIGN KEY(username) REFERENCES users(username))");
	db.exec("DROP TABLE users");
        const createUserTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 'username' varchar type UNIQUE, 'password' varchar);"
        db.exec(createUserTable)	
	res.status(200).send(JSON.stringify({"message": "Deleted all rows in table. (200)"}));
})

//Endpoint for testing. This returns the entire users and gifts databases.
app.get('/app/viewDB/', (req, res) => {
	
        const stmt = db.prepare('SELECT * FROM users');
        let row = stmt.all();
	console.log(row);

	const stmt2 = db.prepare('SELECT * FROM wishes');
	let row2 = stmt2.all();
	console.log(row2);
	res.status(200).send(JSON.stringify({"users": row, "wishes": row2, "message": "Successfully viewing DB (200)"}));
})

//Endpoint for user to view their gifts in profile. They provide their username and password and will see their list of gifts.
app.get('/app/viewProfile/:username/:password/', (req, res) => {
	const stmt = db.prepare("SELECT COUNT(*) AS count FROM users WHERE username='" + req.params.username + "' AND password='" + req.params.password + "'");
        let row = stmt.get();
	if(row.count == 1) {
		const stmt2 = db.prepare("SELECT gifts FROM wishes WHERE username='" + req.params.username + "';");
        	let row2 = stmt2.all();
		res.status(200).send(JSON.stringify({"Gifts" : row2, "message": "Successfully viewing profile (200)"}))
		return;
	}
	else {
		res.status(200).send(JSON.stringify({"message": "Incorrect username/password combination (200)"}));	
	}
});

//Endpoint for a user to delete their profile. All of their information including their gifts will be removed from the database.
app.get('/app/deleteProfile/:username/:password/', (req, res) => {
        const stmt = db.prepare("SELECT COUNT(*) AS count FROM users WHERE username='" + req.params.username + "' AND password='" + req.params.password + "'");
        let row = stmt.get();
        if(row.count == 1) {
                let stmt2 = "DELETE FROM wishes WHERE username='" + req.params.username + "';";
                db.exec(stmt2);
		let stmt3 = "DELETE FROM users WHERE username='" + req.params.username + "';";
		db.exec(stmt3) 
		res.status(200).send(JSON.stringify({"message": "Successful username/password. Your account is deleted. (200)"}))
                return;
        }
        else {
		res.status(200).send(JSON.stringify({"message": "Incorrect username/password combination (200)"}));
        }
});

//Endpoint for a user to update their profile. This changes their password in the database.
app.get('/app/updateProfile/:username/:password/:newpassword', (req, res) => {
        const stmt = db.prepare("SELECT COUNT(*) AS count FROM users WHERE username='" + req.params.username + "' AND password='" + req.params.password + "'");
        let row = stmt.get();
        if(row.count == 1) {
                let stmt2 = "UPDATE users SET password='" + req.params.newpassword + "'WHERE username ='" + req.params.username + "'";
                db.exec(stmt2);
                res.status(200).send(JSON.stringify({"message": "Successful username/password. Your password has been updated. (200)"}))
                return;
        }
        else {
		res.status(200).send(JSON.stringify({"message": "Incorrect username/password combination (200)"}));
        }
});

//Default endpoint if someone tries to access an endpoint not specified.
app.use(function(req,res){
    res.status(404).send(JSON.stringify({"message": "404 NOT FOUND"}));
});

//This lets the tester know the server is up and running and on what port.
app.listen(port, () => {
	console.log("App is live on 8080");
});
