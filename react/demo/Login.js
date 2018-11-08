import React from 'react';
import {withAuthGate} from '../lib'; // change to @ringcentral/react
import {sdk} from './lib';

const Login = ({authError, loginUrl, authorizing}) => {
    if (authorizing) return <div>Loading...</div>;

    const login = () => window.location.assign(loginUrl({implicit: true}));

    return (
        <div>
            {authError && <p>Auth error: {authError}</p>}
            <button type="button" onClick={login}>
                Log in with RingCentral
            </button>
        </div>
    );
};

export default withAuthGate({sdk})(Login);
