const { connection } = require("mongoose");
const Income = require("../models/Income");

//desc  Get all incomes
//@route    GET/api/v1/incomes
// @access  public
exports.getIncomes = async (req, res, next) => {
	try {
		const incomes = await Income.find();
		return res.status(200).json({
			incomes,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};
//desc  Post all incomes
//@route    POST /api/v1/incomes
// @access  public

exports.addIncomes = async (req, res, next) => {
	try {
		const { desc, price, date } = req.body;

		const income = await Income.create(req.body);
		return res.json(income);
	} catch (err) {
		if (err.name === "validationError") {
			const messages = Object.values(err.errors).map((val) => val.message);
			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

//desc  Delete all incomes
//@route    DELETE /api/v1/incomes
// @access  public
exports.deleteIncomes = async (req, res, next) => {
	try {
		const income = await Income.findById(req.params.id);
		if (!income) {
			return res.status(404).json({
				success: false,
				error: "No income found",
			});
		}

		await income.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};
