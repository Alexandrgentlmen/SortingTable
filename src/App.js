import React, { useReducer } from 'react';
import { Form } from './components/Form';
import { ProductTable } from "./components/ProductTable";
import {
	BACKSORTALFABET, EQUALSLENGTH, EQUALSNAME,
	EQUALSSPEED, RESET, SORTALFABET, SORTLENGTHTOLESS,
	SORTLENGTHTOMORE, SORTSPEEDTOLESS, SORTSPEEDTOMORE
} from './types';

const cars =
	[
		{ id: 1, date: '1951/12/14', name: 'Toyota', maxspeed: 198, length: 4.0 },
		{ id: 2, date: '1932/03/25', name: 'Oldsmobile', maxspeed: 157, length: 3.3 },
		{ id: 3, date: '2014/08/19', name: 'Mitsubishi', maxspeed: 124, length: 3.5 },
		{ id: 4, date: '2006/05/22', name: 'Mercedes', maxspeed: 161, length: 3.1 },
		{ id: 5, date: '1951/08/16', name: 'Chevrolet', maxspeed: 179, length: 2.6 },
		{ id: 6, date: '2013/06/06', name: 'Subaru', maxspeed: 323, length: 2.3 },
		{ id: 7, date: '1959/10/05', name: 'Mercury', maxspeed: 99, length: 2.8 },
		{ id: 8, date: '1980/11/22', name: 'Nissan', maxspeed: 173, length: 3.3 },
		{ id: 9, date: '2018/03/28', name: 'Lexus', maxspeed: 305, length: 2.9 },
		{ id: 11, date: '1928/06/16', name: 'BMW', maxspeed: 300, length: 2.5 },
		{ id: 12, date: '1930/04/12', name: 'Ford', maxspeed: 309, length: 3 },
		{ id: 13, date: '1935/02/22', name: 'Mazda', maxspeed: 288, length: 3.2 },
		{ id: 14, date: '1967/10/18', name: 'Studebaker', maxspeed: 158, length: 3.7 },
		{ id: 15, date: '1991/07/06', name: 'Kia', maxspeed: 305, length: 3.5 },
		{ id: 16, date: '1990/08/21', name: 'MINI', maxspeed: 119, length: 2.7 },
		{ id: 17, date: '1998/09/22', name: 'Dodge', maxspeed: 145, length: 3.1 },
		{ id: 18, date: '1923/02/14', name: 'Audi', maxspeed: 234, length: 3.3 },
		{ id: 19, date: '2008/12/08', name: 'Ram', maxspeed: 206, length: 2.9 },
		{ id: 20, date: '1949/05/28', name: 'Oldsmobile', maxspeed: 316, length: 2.4 },
	]
const initialState = { cars };

function reducer(state, action) {
	switch (action.type) {
		case RESET:
			return {
				cars: cars
			}
		case SORTSPEEDTOMORE:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.maxspeed < b.maxspeed) {
						return -1;
					}
					if (a.maxspeed > b.maxspeed) {
						return 1;
					}
					return 0;
				})
			}
		case SORTSPEEDTOLESS:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.maxspeed < b.maxspeed) {
						return 1;
					}
					if (a.maxspeed > b.maxspeed) {
						return -1;
					}
					return 0;
				})
			}
		case SORTLENGTHTOMORE:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.length < b.length) {
						return -1;
					}
					if (a.maxspeed > b.length) {
						return 1;
					}
					return 0;
				})
			}
		case SORTLENGTHTOLESS:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.length < b.length) {
						return 1;
					}
					if (a.length > b.length) {
						return -1;
					}
					return 0;
				})
			}
		case SORTALFABET:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					}
					if (a.name > b.name) {
						return 1;
					}
					return 0;
				})
			}
		case EQUALSSPEED:
			const newCars = state.cars.filter(
				item => item.maxspeed === parseInt(action.payload)
			)
			return {
				cars: newCars
			}
		case EQUALSNAME:
			const newCarName = state.cars.filter(
				item => item.name === action.payload
			)
			return {
				cars: newCarName
			}
		case EQUALSLENGTH:
			const newCarLength = state.cars.filter(
				item => item.length === action.payload
			)
			return {
				cars: newCarLength
			}
		case BACKSORTALFABET:
			return {
				cars: state.cars.sort((a, b) => {
					if (a.name < b.name) {
						return 1;
					}
					if (a.name > b.name) {
						return -1;
					}
					return 0;
				})
			}

		default:
			throw new Error();
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log('rerender App')
	return (
		<div className="App">
			<Form
				resetState={() => { dispatch({ type: RESET }) }}

				sortAlfaBet={() => { dispatch({ type: SORTALFABET }) }}
				backSortAlfaBet={() => { dispatch({ type: BACKSORTALFABET }) }}

				sortEqualsName={(name) => { dispatch({ type: EQUALSNAME, payload: name }) }}
				sortEqualsLength={(length) => { dispatch({ type: EQUALSLENGTH, payload: length }) }}
				sortEqualsSpeed={(sign) => { dispatch({ type: EQUALSSPEED, payload: sign }) }}

				sortSpeedToMore={(operator) => { dispatch({ type: SORTSPEEDTOMORE, payload: operator }) }}
				sortSpeedToLess={(operator) => { dispatch({ type: SORTSPEEDTOLESS, payload: operator }) }}

				sortLengthToMore={(operator) => { dispatch({ type: SORTLENGTHTOMORE, payload: operator }) }}
				sortLengthToLess={(operator) => { dispatch({ type: SORTLENGTHTOLESS, payload: operator }) }}
			/>
			<ProductTable cars={state.cars} />
		</div>
	);
}

export default App;
