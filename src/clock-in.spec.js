import assert from 'assert';
import {mockFetchOk, mockFetchError} from "../utils/mock-fetch";
import {clockIn} from "./main";

function gpsIsAvailable() {

    return new Promise((resolve) => {
        const availableGpsCoordinates = {
            latitude: 1,
            longitude: 1
        };

        resolve(availableGpsCoordinates);
    });
}

function gpsIsNotAvailable() {
    return new Promise((resolve, reject) => {
        reject('GPS is not available');
    });
}

const time = 10;

describe('time tracking', () => {

    beforeEach(function () {
        assert(true, typeof clockIn !== 'undefined');
    });

    context('Simple clock-in without GPS', () => {
        it('should return an ok response', (done) => {
            clockIn(time, mockFetchOk).then((response) => {
                assert.equal(response.status, 'ok');
                done();
            });
        });

        it('should return an error response', (done) => {
            clockIn(time, mockFetchError).then((response) => {
                assert(false);
            }).catch((error) => {
                assert.equal(error.status, 'error');
                done();
            });
        });
    });

    context('GPS is optional', () => {
        it('does NOT send GPS data when no GPS is available', (done) => {
            clockIn(time, mockFetchOk, gpsIsNotAvailable).then((response) => {
                assert.equal(response.status, 'ok');
                assert.equal(response.warning, 'Coordinates was not send');
                done();
            });
        });
    });


    // context('GPS is required', () => {
    //     it('sends clock-in when GPS is available', () =>
    //         sendClockIn(gpsIsAvailable)
    //     );
    //
    //     it('sends clock-in with coordinates when GPS is available', (done) => {
    //     });
    //
    //     it('does NOT send clock-in when no GPS is available', (done) => {
    //         sendClockIn(gpsIsNotAvailable)
    //             .then(() => assert(false, 'Promise should have been rejected'))
    //             .catch(done);
    //     });
    //
    //     it('warns the user when no GPS is available', () => {
    //
    //     });
    // });
    //
});
