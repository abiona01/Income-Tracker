import axios from "axios";
import { GET_INCOME, ADD_INCOME, DELETE_INCOME, INCOMES_LOADING } from "./type";

export const getIncome = () => async (dispatch) => {
	try {
		dispatch(setItemsLoading());
		const res = await axios.get("/api/incomes");
		dispatch({
			type: GET_INCOME,
			payload: res.data.incomes,
		});
	} catch (err) {
		console.log(err);
	}
};
export const addIncome = (income) => (dispatch) => {
	try {
		const res = axios.post("/api/incomes", income);
		dispatch({
			type: ADD_INCOME,
			payload: income,
		});
		console.log(res.data.income);
	} catch (error) {
		console.log(error);
	}
};

export const deleteIncome = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/incomes/${id}`);
		dispatch({
			type: DELETE_INCOME,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
};

export const setItemsLoading = () => {
	return {
		type: INCOMES_LOADING,
	};
};
