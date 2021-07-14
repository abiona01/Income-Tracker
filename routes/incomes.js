const express = require("express");
const router = express.Router();
const { getIncomes, addIncomes, deleteIncomes } = require("../api/incomes");
router.route("/").get(getIncomes).post(addIncomes);

router.route("/:id").delete(deleteIncomes);
module.exports = router;
