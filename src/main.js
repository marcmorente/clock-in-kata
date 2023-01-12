export function clockIn(time, mockFetch, isGpsAvailable) {
    if (typeof isGpsAvailable === 'undefined') {
        return mockFetch(time);
    }

    return isGpsAvailable().then((gpsCoordinates) => {
        return mockFetch(time, gpsCoordinates);
    }).catch(() => {
        return mockFetch(time);
    });
}