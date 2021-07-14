import React from "react";
import { useDispatch } from "react-redux";
function IncomeItem({ income, deleteIncome }) {
	const dispatch = useDispatch();
	let date = new Date(income?.date);
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	return (
		<div className='income-item'>
			{income && (
				<>
					{" "}
					<button
						className='remove-item'
						onClick={() => dispatch(deleteIncome(income._id))}
					>
						{" "}
						X
					</button>
					<div className='desc'>{income.desc}</div>
					<div className='price'>&#8358;{income.price}</div>
					<div className='date'>{day + "/" + month + "/" + year}</div>
				</>
			)}
		</div>
	);
}

export default IncomeItem;
