import {
	GET_INCOME,
	ADD_INCOME,
	DELETE_INCOME,
	INCOMES_LOADING,
} from "../action/type";
// import uuid from "react-uuid";
const initialState = {
	incomes: [],
	loading: false,
};

const incomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INCOME:
			return { ...state, incomes: action.payload, loading: false };
		case ADD_INCOME:
			return {
				...state,
				incomes: [action.payload, ...state.incomes],
			};
		case DELETE_INCOME:
			return {
				...state,
				incomes: state.incomes.filter(
					(income) => income._id !== action.payload
				),
			};
		case INCOMES_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default incomeReducer;
