console.log("Web serverni boshlash");

const express = require("express");
const mongodb = require("mongodb");
const app = express();
const fs = require("fs");

// call MongoDB
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
	if (err) {
		console.log("ERROR:", err);
	} else {
		user = JSON.parse(data);
	}
});

//1: kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: sessionga bogliq kodlar

//3: Views

// BSSR = backend server side rendering
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	console.log("user entered /");
	db.collection("plans")
		.find()
		.toArray((err, data) => {
			if (err) {
				console.log(err);
				res.end("something went wrong");
			} else {
				res.render("reja", { items: data });
			}
		});
});

app.get("/author", (req, res) => {
	res.render("author", { user: user });
});

app.post("/delete-item", (req, res) => {
	const id = req.body.id;

	db.collection("plans").deleteOne(
		{ _id: new mongodb.ObjectId(id) },
		(err, data) => {
			res.json({ state: "success" });
		}
	);
});

app.post("/create-item", (req, res) => {
	console.log("user entered /create-item");

	db.collection("plans").insertOne({ reja: req.body.reja }, (err, data) => {
		res.json(data.ops[0]);
	});
});

module.exports = app;
