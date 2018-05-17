import React from 'react';
import { Route } from 'react-router';

import Home from 'home/container';
import {
    Login,
    Signup
} from 'auth/containers';

export default function Routes() {
    return (
        <div>
            <Route path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
        </div>
    );
}
