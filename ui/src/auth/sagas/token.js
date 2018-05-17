import { put, takeEvery } from 'redux-saga/effects';

import { RECEIVE_TOKEN } from '../action-types/token';
import { setCookie } from '../../cookie';

export function* onReceiveToken({ authToken }) {
    yield put(setCookie({
        key: 'auth-token',
        value: authToken
    }));
}

export default function* run() {
    yield [
        takeEvery(RECEIVE_TOKEN, onReceiveToken)
    ];
}
