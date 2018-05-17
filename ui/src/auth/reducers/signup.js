import {
    ACCEPT_ATTEMPT,
    CHANGE_EMAIL_ADDRESS,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_CONFIRMATION,
    REJECT_ATTEMPT,
    SUBMIT_ATTEMPT
} from '../action-types/signup';

const initialState = {
    attempt: {
        accepted: false,
        rejected: false,
        submitted: false
    },
    credentials: {
        emailAddress: "",
        password: "",
        passwordConfirmation: ""
    }
};

export default function signup(state = initialState, action) {
    switch(action.type) {
    case ACCEPT_ATTEMPT:
        return Object.assign({}, state, {
            attempt: {
                accepted: true,
                rejected: false,
                submitted: true
            }
        });
    case CHANGE_EMAIL_ADDRESS:
        return Object.assign({}, state, {
            credentials: {
                emailAddress: action.emailAddress,
                password: state.credentials.password,
                passwordConfirmation: state.credentials.passwordConfirmation
            }
        });
    case CHANGE_PASSWORD:
        return Object.assign({}, state, {
            credentials: {
                emailAddress: state.credentials.emailAddress,
                password: action.password,
                passwordConfirmation: state.credentials.passwordConfirmation
            }
        });
    case CHANGE_PASSWORD_CONFIRMATION:
        return Object.assign({}, state, {
            credentials: {
                emailAddress: state.credentials.emailAddress,
                password: state.credentials.password,
                passwordConfirmation: action.passwordConfirmation
            }
        });
    case REJECT_ATTEMPT:
        return Object.assign({}, state, {
            attempt: {
                accepted: false,
                rejected: true,
                submitted: true
            }
        });
    case SUBMIT_ATTEMPT:
        return Object.assign({}, state, {
            attempt: {
                accepted: false,
                rejected: false,
                submitted: true
            }
        });
    default:
        return state;
    }
}
