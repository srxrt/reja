const http = require("http");
const mongodb = require("mongodb");

const connectionString =
	"mongodb+srv://str9703:8B2YRW1qXg3IqvYl@cluster0.rj47y.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
	connectionString,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, client) => {
		if (err) console.log("ERROR on connection MongoDB", err);
		else {
			module.exports = client;

			console.log("MongoDB connection succeeded");
			const app = require("./app");
			const server = http.createServer(app);
			const PORT = process.env.PORT || 3000;
			server.listen(PORT, function () {
				console.log(
					"Server is listening on port:",
					PORT,
					`http://localhost:${PORT}`
				);
			});
		}
	}
);
