import React from 'react';
import Authenticate from "./authentication"
import Cookies from 'universal-cookie';


const cookies = new Cookies();
function RequireLogin(props) {
    const tryLogIn = () => {
        // Try to read from cookie
        const token = cookies.get('token')
        if (token){
            // Check token
            const success = true;
            if (success){
                console.log('Sucessful Login');
                return true;
            }
        }
    }
    const isAuth = tryLogIn();
    return (
        <Authenticate isAuth={isAuth}>
            {props.children}
        </Authenticate>
        )
}
export  default  RequireLogin;