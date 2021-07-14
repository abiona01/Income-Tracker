const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();
const income = require("./routes/incomes");
const app = express();
// app.get("/", (req, res) => res.send("Bravo my life"));

app.use(express.json());

//Morgan
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/api/incomes", income);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`.yellow.bold)
);
