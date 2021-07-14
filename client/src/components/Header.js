import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/format";

function Header() {
	const income = useSelector((state) => state.incomes);
	const [totalIncome, setTotalIncome] = useState(0);
	useEffect(() => {
		let temp = 0;
		for (let i = 0; i < income?.length; i++) {
			temp += parseInt(income[i]?.price);
		}
		setTotalIncome(temp);
	}, [income]);
	return (
		<header>
			<h1>Income Tracker</h1>
			<div className='total-income'>&#8358;{numberWithCommas(totalIncome)}</div>
		</header>
	);
}

export default Header;
