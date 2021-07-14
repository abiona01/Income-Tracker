import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />
				<IncomeForm />
				<IncomeList />
			</div>
		</Provider>
	);
}

export default App;
