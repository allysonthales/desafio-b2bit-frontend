import { useState } from "react";

export function useLoading() {
	const [loading, setLoading] = useState(false);

	async function initLoading() {
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 3000));
		} finally {
			setLoading(false);
		}
	}

	return { loading, initLoading };
}
