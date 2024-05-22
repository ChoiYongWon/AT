export const getPosition = ():Promise<GeolocationPosition> => {
	return new Promise((resolve, reject) =>
    	navigator.geolocation.getCurrentPosition(resolve, reject, {
			maximumAge: 1000 * 30 // 캐시 30초
		})
	);
};