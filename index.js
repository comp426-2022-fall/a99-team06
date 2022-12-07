#!/usr/bin/env node

import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
        res.status(200).send("200 OK");
})

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK");
})

app.listen(port, () => {
	console.log("App is live on 8080");
});
