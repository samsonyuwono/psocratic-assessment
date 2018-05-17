import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../action-creators/login';
import { Login as LoginUI } from '../components';

@connect(
    function mapStateToProps(state) {
        return state.auth.login;
    },
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(ActionCreators, dispatch);
    }
)
export default class Login extends React.Component {
    static get Id() {
        return 'login-container';
    }

    render() {
        return (
            <LoginUI id={Login.Id} {...this.props}></LoginUI>
        );
    }
}
