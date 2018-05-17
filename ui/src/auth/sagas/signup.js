import { call, put, takeEvery } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';

import SignupActionCreators from '../action-creators/signup';
import SignupAPI from '../api/signup'
import { SUBMIT_ATTEMPT } from '../action-types/signup';
import TokenActionCreators from '../action-creators/token';

export function* onSubmitAttempt({ emailAddress, password, passwordConfirmation }) {
    if(isEmpty(trim(emailAddress))) {
        return yield put(SignupActionCreators.rejectAttempt());
    }

    if(isEmpty(password) || isEmpty(passwordConfirmation)) {
        return yield put(SignupActionCreators.rejectAttempt());
    }

    if(password != passwordConfirmation) {
        return yield put(SignupActionCreators.rejectAttempt());
    }

    try {
        const { authToken } = yield call(SignupAPI.postAttempt, { emailAddress, password, passwordConfirmation });

        yield [
            put(SignupActionCreators.acceptAttempt()),
            put(TokenActionCreators.receiveToken({ authToken }))
        ];
    } catch(e) {
        yield put(SignupActionCreators.rejectAttempt());
    }
}

export default function* run() {
    yield [
        takeEvery(SUBMIT_ATTEMPT, onSubmitAttempt)
    ];
}
