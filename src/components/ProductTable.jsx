import React from "react";

function ProductTable({ cars }) {
	  
  return (
				<table>
					<caption>CARS</caption>
					<thead>
						<tr>
							<th>
								Date
							</th>
							<th>
								Name
							</th>
							<th>
								Maxspeed
							</th>
							<th>
								Length
							</th>
						</tr>
					</thead>
					<tbody>
						{cars?.map(car => (
							<tr key={car.id}>
								<td>{car.date}</td>
								<td>{car.name}</td>
								<td>{car.maxspeed}</td>
								<td>{car.length}</td>
							</tr>
						))}
					</tbody>
    		</table>	
  );
}

export {ProductTable};
