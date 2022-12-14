import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
	// Состояние и сеттер для отложенного значения
	const [debouncedValue, setDebouncedValue] = useState(value);


	useEffect(() => {
			// Выставить debouncedValue равным value (переданное значение) 
			const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

			return () => {
        clearTimeout(handler);
      };
		},
		[value,delay]
	);

return debouncedValue;
}