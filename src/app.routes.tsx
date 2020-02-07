import * as React from 'react';
import {Route, Redirect , RouteProps} from 'react-router-dom';
import auth from './Auth';

interface IProtectedRoute extends RouteProps {
    component : any
}


export const ProtectedRoute : React.FC<IProtectedRoute> = ({component : Component , ...rest}) => {
    
    return <Route {...rest} render={(props) => {
        if(auth.isLogged()) {
            return (
                <Component {...props} />
            )
        }

        return (
            <Redirect to={
                {
                    pathname : '/',
                    state : {
                        from : props.location
                    }
                }
            } />
        )
    }}/>
}