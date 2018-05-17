import React from 'react';
import partial from 'lodash/partial';

import preventDefault from 'helper/dom/prevent-default';

export default function SignupForm(props) {
    return (
        <form onSubmit={preventDefault(partial(props.onSubmit, props.credentials))}>
            <fieldset>
                <label>EMAIL ADDRESS</label>
                <input name="email"
                    onChange={e => {
                        props.onChangeEmailAddress({ emailAddress: e.target.value });
                    }}
                    value={props.credentials.emailAddress}
                    type="email"></input>
            </fieldset>
            <fieldset>
                <label>PASSWORD</label>
                <input name="password"
                    onChange={e => {
                        props.onChangePassword({ password: e.target.value });
                    }}
                    type="password"
                    value={props.credentials.password}></input>
            </fieldset>
            <fieldset>
                <label>CONFIRM PASSWORD</label>
                <input name="password-confirmation"
                    onChange={e => {
                        props.onChangePasswordConfirmation({ passwordConfirmation: e.target.value });
                    }}
                    type="password"
                    value={props.credentials.passwordConfirmation}></input>
            </fieldset>
            <fieldset>
                <button type="submit">SIGNUP</button>
            </fieldset>
        </form>
    );
}
