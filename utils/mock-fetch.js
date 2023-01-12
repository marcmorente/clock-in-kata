const mockFetchOk = (time, gpsCoordinates) => {
    let warningMessage = typeof gpsCoordinates === 'undefined' ? 'Coordinates was not send' : '';

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                'status' : 'ok',
                'warning' : warningMessage
            });
        }, 500);
    });
};

const mockFetchError = (time, gpsCoordinates) => {
    let warningMessage = typeof gpsCoordinates === 'undefined' ? 'Coordinates was not send' : '';

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                'status' : 'error',
                'warning' : warningMessage
            });
        }, 500);
    });
};

export { mockFetchOk, mockFetchError };