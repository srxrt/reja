console.log("Web serverni boshlash");

const express = require("express");
const http = require("http");
const app = express();

//1: kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: sessionga bogliq kodlar

//3: Views

// BSSR = backend server side rendering
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing
app.get("/", function (req, res) {
	res.render("harid");
});
app.post("/create-item", (req, res) => {
	console.log(req.body);
	res.json({ test: "success" });
});
const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
	console.log("Server is listening on port:", PORT);
});
