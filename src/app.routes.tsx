import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

export class Auth {

    public isLogged() {
        return localStorage.getItem('token') ? true : false;
    }
    
    public logout(cb : any) {
        localStorage.clear();
        cb();
    }
    
    public login(cb : any) {
        let token = 'hellomynameistoken!';
        localStorage.setItem('token',token);
        cb();
    }
}


export const ProtectedRoute = ({component : Component , ...rest} : {component : any  , path : string}) => {
    
    const auth = new Auth();
    
    return <Route {...rest} render={(props) => {
        if(auth.isLogged()) {
            return (
                <Component {...props} />
            )
        }

        return (
            <Redirect to="/" />
        )
    }}/>
}