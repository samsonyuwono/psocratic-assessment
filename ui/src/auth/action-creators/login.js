import {
    ACCEPT_ATTEMPT,
    CHANGE_EMAIL_ADDRESS,
    CHANGE_PASSWORD,
    REJECT_ATTEMPT,
    SUBMIT_ATTEMPT
} from '../action-types/login';

export function acceptAttempt() {
    return {
        type: ACCEPT_ATTEMPT
    };
}

export function changeEmailAddress({ emailAddress }) {
    return {
        emailAddress,
        type: CHANGE_EMAIL_ADDRESS
    };
}

export function changePassword({ password }) {
    return {
        password,
        type: CHANGE_PASSWORD
    };
}

export function rejectAttempt({}) {
    return {
        type: REJECT_ATTEMPT
    };
}

export function submitAttempt({ emailAddress, password }) {
    return {
        emailAddress,
        password,
        type: SUBMIT_ATTEMPT
    }
}

export default {
    acceptAttempt,
    changeEmailAddress,
    changePassword,
    rejectAttempt,
    submitAttempt
}
