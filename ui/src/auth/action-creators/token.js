import { RECEIVE_TOKEN } from '../action-types/token';

export function receiveToken({ authToken }) {
    return {
        authToken,
        type: RECEIVE_TOKEN
    };
}

export default {
    receiveToken
}
