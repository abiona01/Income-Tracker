import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IncomeItem from "./IncomeItem";
import { getIncome, deleteIncome } from "../redux/action/incomeAction";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/ClipLoader";
function IncomeList() {
	const incomes = useSelector((state) => state.incomes);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getIncome());
	}, [dispatch]);
	const override = css`
		display: block;
		margin: 20px auto;
		color: red;
		border-color: red;
	`;
	return (
		<div className='income-list'>
			{loading ? (
				<>
					<FadeLoader css={override} size={100} />
				</>
			) : (
				<>
					{incomes.map((income) => (
						<IncomeItem
							key={income._id}
							income={income}
							deleteIncome={deleteIncome}
						/>
					))}
				</>
			)}
		</div>
	);
}

export default IncomeList;
