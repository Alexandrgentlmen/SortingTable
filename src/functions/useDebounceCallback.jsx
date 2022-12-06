import { useCallback, useRef } from "react";

function useDebounceCallback(callback, delay) {
	const timer = useRef(null);

	const debouncedCallback = useCallback((...args) => {
		if(timer.current) {
			clearTimeout(timer.current)
		}

		timer.current = setTimeout(()=> {
			callback(...args)
		}, delay)
	}, [callback, delay])
	return debouncedCallback;
}

export default useDebounceCallback;