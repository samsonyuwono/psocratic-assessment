import React from 'react';

import {
    SIGNUP_ACCEPTED,
    SIGNUP_PROMPT,
    SIGNUP_REJECTED,
    SIGNUP_SUBMITTED
} from 'auth/messages';

export default function SignupStatus(props) {
    const {
        accepted,
        rejected,
        submitted
    } = props.attempt;

    let message = SIGNUP_PROMPT;
    if (accepted) {
        message = SIGNUP_ACCEPTED;
    } else if (rejected) {
        message = SIGNUP_REJECTED;
    } else if (submitted) {
        message = SIGNUP_SUBMITTED;
    } 

    return (
        <p className="status">{message}</p>
    );
}
