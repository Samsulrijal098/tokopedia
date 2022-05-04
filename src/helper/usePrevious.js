import { useRef, useEffect } from "react";

const usePrevious = (value) => {
	const ref = useRef(value);
	useEffect(() => {
		if (value !== null && value !== undefined) {
			ref.current = value;
		}
	});
	return ref.current;
};

export { usePrevious }