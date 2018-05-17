import { call, put, takeEvery } from 'redux-saga/effects';

import LoginActionCreators from '../action-creators/login';
import LoginAPI from '../api/login'
import { SUBMIT_ATTEMPT } from '../action-types/login';
import TokenActionCreators from '../action-creators/token';

export function* onSubmitAttempt({ emailAddress, password }) {
    try {
        const { authToken } = yield call(LoginAPI.postAttempt, { emailAddress, password });

        yield [
            put(LoginActionCreators.acceptAttempt()),
            put(TokenActionCreators.receiveToken({ authToken }))
        ];
    } catch(e) {
        yield put(LoginActionCreators.rejectAttempt({ emailAddress, password }));
    }
}

export default function* run() {
    yield [
        takeEvery(SUBMIT_ATTEMPT, onSubmitAttempt)
    ];
}
