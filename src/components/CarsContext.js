import { createContext } from "react";

// function sortingAlfaBet(cars) {
// 	let sortedProducts = [...cars];
// 	sortedProducts.sort((a, b) => {
// 		if (a.name < b.name) {
// 			return -1;
// 		}
// 		if (a.name > b.name) {
// 			return 1;
// 		}
// 		return 0;
// 	});
// }

// const cars =
// 	[
// 		{ id: 1, date: '1951/12/14', name: 'Toyota', maxspeed: 198, length: 4.0 },
// 		{ id: 2, date: '1932/03/25', name: 'Oldsmobile', maxspeed: 157, length: 3.3 },
// 		{ id: 3, date: '2014/08/19', name: 'Mitsubishi', maxspeed: 124, length: 3.5 },
// 		{ id: 4, date: '2006/05/22', name: 'Mercedes', maxspeed: 161, length: 3.1 },
// 		{ id: 5, date: '1951/08/16', name: 'Chevrolet', maxspeed: 179, length: 2.6 },
// 		{ id: 6, date: '2013/06/06', name: 'Subaru', maxspeed: 323, length: 2.3 },
// 		{ id: 7, date: '1959/10/05', name: 'Mercury', maxspeed: 99, length: 2.8 },
// 		{ id: 8, date: '1980/11/22', name: 'Nissan', maxspeed: 173, length: 3.3 },
// 		{ id: 9, date: '2018/03/28', name: 'Lexus', maxspeed: 305, length: 2.9 },
// 		{ id: 11, date: '1928/06/16', name: 'BMW', maxspeed: 300, length: 2.5 },
// 		{ id: 12, date: '1930/04/12', name: 'Ford', maxspeed: 309, length: 3 },
// 		{ id: 13, date: '1935/02/22', name: 'Mazda', maxspeed: 288, length: 3.2 },
// 		{ id: 14, date: '1967/10/18', name: 'Studebaker', maxspeed: 158, length: 3.7 },
// 		{ id: 15, date: '1991/07/06', name: 'Kia', maxspeed: 305, length: 3.5 },
// 		{ id: 16, date: '1990/08/21', name: 'MINI', maxspeed: 119, length: 2.7 },
// 		{ id: 17, date: '1998/09/22', name: 'Dodge', maxspeed: 145, length: 3.1 },
// 		{ id: 18, date: '1923/02/14', name: 'Audi', maxspeed: 234, length: 3.3 },
// 		{ id: 19, date: '2008/12/08', name: 'Ram', maxspeed: 206, length: 2.9 },
// 		{ id: 20, date: '1949/05/28', name: 'Oldsmobile', maxspeed: 316, length: 2.4 },
// 	]

export const CarsArrayContext = createContext();