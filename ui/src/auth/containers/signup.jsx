import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../action-creators/signup';
import { Signup as SignupUI } from '../components';

@connect(
    function mapStateToProps(state) {
        return state.auth.signup;
    },
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(ActionCreators, dispatch);
    }
)
export default class Signup extends React.Component {
    static get Id() {
        return 'signup-container';
    }

    render() {
        return (
            <SignupUI id={Signup.Id} {...this.props}></SignupUI>
        );
    }
}
