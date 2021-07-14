const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
	desc: {
		type: String,
		trim: true,
		required: [true, "Please add description"],
	},
	price: {
		type: Number,
		required: [true, "Please add price"],
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model("Income", IncomeSchema);
