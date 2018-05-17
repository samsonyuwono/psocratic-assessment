import React from 'react';

import LoginStatus from './login-status';
import LoginForm from './login-form';

export default function Login(props) {
    return (
        <div id={props.id}>
            <LoginStatus attempt={props.attempt}></LoginStatus>
            <LoginForm credentials={props.credentials}
                onChangeEmailAddress={props.changeEmailAddress}
                onChangePassword={props.changePassword}
                onSubmit={props.submitAttempt}></LoginForm>
        </div>
    );
}
