export function loadingTime(ms: number = 3000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
