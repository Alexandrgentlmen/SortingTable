import React, { useState } from 'react';

function InputText () {

	const [words, setWords] = useState('');

	return (
		<input
			type="text"
			id="text"
      name="text"
			value={words}
		  placeholder="search"
			onChange={(e) => setWords(e.target.value)}
		/>
	)
}
export {InputText};