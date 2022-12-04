export const getDurationFromMilliseconds = (milliseconds: number) => {
	let seconds: string | number = Math.floor((milliseconds / 1000) % 60);
	let minutes: string | number = Math.floor((milliseconds / (1000 * 60)) % 60);
	let hours: string | number = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	seconds = (seconds >= 10) ? seconds : "0" + seconds;

	return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
}