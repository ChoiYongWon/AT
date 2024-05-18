export const getPosition = ():Promise<GeolocationPosition> => {
	return new Promise((resolve, reject) =>
    	navigator.geolocation.getCurrentPosition(resolve, reject)
	);
};