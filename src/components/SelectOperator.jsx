import React, { useState } from 'react';

function SelectOperator() {
	const [value, setValue] = useState({value:'enter word :'});

	function chengeSelect(event) {
		
		setValue(event.target.value);
 }
 return (
	<div className="select">
		<select 
		className="standard-select"
		value={value} 
		name="operator" 
		onChange={chengeSelect}
		>
			<option value="contains">enter word :</option>
			<option value="equals">equals = </option>
			<option value="more">more &gt;</option>
			<option value="less">less &lt;</option>
		</select>
		<span className="focus"></span>
	</div>
 )
	
}

export {SelectOperator};