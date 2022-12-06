import React, { useState } from 'react';

function SelectParam() {
	const [value, setValue] = useState({value:'name'});

	function chengeSelect(event) {
		setValue(event.target.value);
 }
 	return (
		<div className="select">
			<select 
			className="standard-select"
			value={value} 
			name="parametr" 
			onChange={chengeSelect}
			>
				<option value="name">Name</option>
				<option value="maxspeed">Maxspeed</option>
				<option value="length">Length</option>
			</select>
			<span className="focus"></span>
		</div>
	)
}

export {SelectParam};