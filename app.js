console.log("Web serverni boshlash");

const express = require("express");

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
	res.render("reja");
});

app.get("/author", (req, res) => {
	res.render("author", { user: user });
});

app.post("/create-item", (req, res) => {
	console.log(req.body);
	res.json({ test: "success" });
});

module.exports = app;
