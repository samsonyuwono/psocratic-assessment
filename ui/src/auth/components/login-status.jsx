import React from 'react';

import {
    LOGIN_ACCEPTED,
    LOGIN_PROMPT,
    LOGIN_REJECTED,
    LOGIN_SUBMITTED
} from '../messages';

export default function LoginStatus(props) {
    const {
        accepted,
        rejected,
        submitted
    } = props.attempt;

    let message = LOGIN_PROMPT;
    if (accepted) {
        message = LOGIN_ACCEPTED;
    } else if (rejected) {
        message = LOGIN_REJECTED;
    } else if (submitted) {
        message = LOGIN_SUBMITTED;
    } 

    return (
        <p>{message}</p>
    );
}
