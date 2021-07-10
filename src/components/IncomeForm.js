import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
	const desc = useRef(null);
	const date = useRef(null);
	const price = useRef(null);
	const AddIncome = (e) => {
		e.preventDefault();
		const d = date.current.value.split("-");
		const newD = new Date(d[0], d[1], d[2]);

		setIncome([
			...income,
			{
				desc: desc.current.value,
				price: price.current.value,
				date: newD.getTime(),
			},
		]);

		desc.current.value = "";
		price.current.value = null;
		date.current.value = null;
	};
	return (
		<form className='income-form' onSubmit={AddIncome}>
			<div className='form-inner'>
				<input
					type='text'
					name='desc'
					id='desc'
					ref={desc}
					placeholder='Income description'
				/>
				<input
					type='number'
					name='price'
					id='price'
					ref={price}
					placeholder='Price'
				/>
				<input
					type='date'
					name='date'
					id='date'
					ref={date}
					placeholder='Income date...'
				/>
				<input type='submit' value='Add Income' />
			</div>
		</form>
	);
}

export default IncomeForm;