export function generateRandomDatapoints(coords: number[][]):any[] {
    const dps: any[] = [];

	for(let i = 0; i < coords.length; i++) {
		const dp = {
			time_s: Math.floor(Date.now() / 1000),
			velocity_kmps: i % 160,
			noise_db: i % 2 + 60,
			vibration: 1 + Math.floor(Math.random() * 3),
			temperature_celsius: 21 + Math.floor(Math.random() * 8),
			pressure_pascals: 100000 + Math.floor(Math.random() * 10000),
            annotation: Math.floor(Math.random() * 100) === 0 ? "foo bar" : "",
			latitude: coords[i][1],
            longitude: coords[i][0],
		}

		dps.push(dp);
	}
    return dps;
}