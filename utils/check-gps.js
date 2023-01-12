const gpsIsAvailable = () => {
    return new Promise((resolve) => {
        const availableGpsCoordinates = {
            latitude: 1,
            longitude: 1
        };

        resolve(availableGpsCoordinates);
    });
}

const gpsIsNotAvailable = () => {
    return new Promise((resolve, reject) => {
        reject('GPS is not available');
    });
}

export { gpsIsAvailable, gpsIsNotAvailable };