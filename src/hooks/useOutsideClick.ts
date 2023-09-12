import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
	const ref = useRef<any>();

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [ref]);

	return ref;
};
