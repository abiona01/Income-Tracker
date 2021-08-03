import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../redux/action/incomeAction";
function IncomeForm() {
	const dispatch = useDispatch();
	const desc = useRef(null);
	const date = useRef(null);
	const price = useRef(null);
	const submitIncome = (e) => {
		e.preventDefault();
		const d = date.current.value.split("-");
		const newD = new Date(d[0], d[1], d[2]);

		const newIncome = {
			desc: desc.current.value,
			price: price.current.value,
			date: newD.getTime(),
		};
		dispatch(addIncome(newIncome));
		desc.current.value = "";
		price.current.value = null;
		date.current.value = null;
	};
	return (
		<form className='income-form' onSubmit={submitIncome}>
			<div className='form-inner'>
				<input
					type='text'
					name='desc'
					id='desc'
					ref={desc}
					placeholder='Income description'
					required
				/>
				<input
					type='number'
					name='price'
					id='price'
					ref={price}
					placeholder='Price'
					required
				/>
				<input
					type='text'
					name='date'
					id='date'
					ref={date}
					onFocus={(e) => {
						e.currentTarget.type = "date";
					}}
					onBlur={(e) => (e.currentTarget.type = "text")}
					placeholder='Date'
					required
				/>

				<input type='submit' value='Add Income' />
			</div>
		</form>
	);
}

export default IncomeForm;
