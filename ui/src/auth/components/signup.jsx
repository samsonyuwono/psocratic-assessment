import React from 'react';

import SignupForm from './signup-form';
import SignupStatus from './signup-status';

export default function Signup(props) {
    return (
        <div id={props.id}>
            <SignupStatus attempt={props.attempt}></SignupStatus>
            <SignupForm credentials={props.credentials}
                onChangeEmailAddress={props.changeEmailAddress}
                onChangePassword={props.changePassword}
                onChangePasswordConfirmation={props.changePasswordConfirmation}
                onSubmit={props.submitAttempt}></SignupForm>
        </div>
    );
}
