import React from 'react';
import partial from 'lodash/partial';

import preventDefault from 'helper/dom/prevent-default';

export default function LoginForm(props) {
    return (
        <form onSubmit={preventDefault(partial(props.onSubmit, props.credentials))}>
            <fieldset>
                <label>EMAIL ADDRESS</label>
                <input name="email"
                    onChange={e => {
                        props.onChangeEmailAddress({ emailAddress: e.target.value });
                    }}
                    type="email"
                    value={props.credentials.emailAddress}></input>
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
                <button type="submit">LOGIN</button>
            </fieldset>
        </form>
    );
}
