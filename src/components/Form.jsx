import React, { useState} from 'react';


function Form({resetState,
	sortAlfaBet, backSortAlfaBet,
	sortEqualsSpeed, sortEqualsName, sortEqualsLength,
	sortSpeedToMore, sortSpeedToLess,
	sortLengthToLess, sortLengthToMore
	 })
	{	

	const [param, setParam] = useState({value:'name'});
	const [operator, setOperator] = useState({value:'enter sign :'});
	const [sign, setSign] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();

		if (param.value === 'name' && operator.value === 'more') {
			sortAlfaBet();
		} else if (param.value === 'name' && operator.value=== 'less') {
			backSortAlfaBet();
		} else if (param.value === "maxspeed" && operator.value === "equals") {
			sortEqualsSpeed(sign);
		} else if (param.value === "name" && operator.value === "equals") {
			sortEqualsName(sign);
		} else if (param.value === "length" && operator.value === "equals") {
			sortEqualsLength(parseFloat(sign));
		}	else if (param.value === "maxspeed" && operator.value === "more") {
			sortSpeedToMore(operator.value);
		} else if (param.value === "maxspeed" && operator.value === "less") {
			sortSpeedToLess(operator.value);
		} else if (param.value === "length" && operator.value === "more") {
			sortLengthToMore(operator.value);
		} else if (param.value === "length" && operator.value === "less") {
			sortLengthToLess(operator.value);
		} 
	}



	const handleReset = () => {
		resetState();
		setParam({value:'name'});
		setOperator({value:'enter sign :'});
		setSign('');
	}
	console.log('rerender Form')
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="select">
					<select 
						className="standard-select"
						value={param.value} 
						name="parametr" 
						onChange={(event) =>{ setParam({value: event.target.value}) }}
					>
						<option value="name">Name</option>
						<option value="maxspeed">Maxspeed</option>
						<option value="length">Length</option>
					</select>
					<span className="focus"></span>
				</div>
				<div className="select">
					<select 
					className="standard-select"
					value={operator.value} 
					name="operator" 
					onChange={(event) =>{ setOperator({value: event.target.value}) }}
					>
						<option value="contains">enter sign :</option>
						<option value="equals">equals =</option>
						<option value="more">more &gt;</option>
						<option value="less">less &lt;</option>
					</select>
					<span className="focus"></span>
				</div>
							
				<input
					type="text"
					id="text"
					name="text"
					value={sign}
					placeholder="search"
					onChange={ (e) => setSign(e.target.value) }
				/>
				
				<input
					type="submit"
					value="Sorting"
				/>

				<button
					className="reset"
					onClick={handleReset}>Reset
				</button>
			</form>
		</>
	)
}

export {Form};