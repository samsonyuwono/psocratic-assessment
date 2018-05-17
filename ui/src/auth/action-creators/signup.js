import {
    ACCEPT_ATTEMPT,
    CHANGE_EMAIL_ADDRESS,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_CONFIRMATION,
    REJECT_ATTEMPT,
    SUBMIT_ATTEMPT
} from '../action-types/signup';

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

export function changePasswordConfirmation({ passwordConfirmation }) {
    return {
        passwordConfirmation,
        type: CHANGE_PASSWORD_CONFIRMATION
    };
}

export function rejectAttempt() {
    return {
        type: REJECT_ATTEMPT
    };
}

export function submitAttempt({ emailAddress, password, passwordConfirmation }) {
    return {
        emailAddress,
        password,
        passwordConfirmation,
        type: SUBMIT_ATTEMPT
    }
}

export default {
    acceptAttempt,
    changeEmailAddress,
    changePassword,
    changePasswordConfirmation,
    rejectAttempt,
    submitAttempt
}
