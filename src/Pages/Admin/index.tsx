import * as React from 'react';
import auth from '../../Auth';

interface IProps {
    history : any
}

const Admin : React.FC<IProps> = props => {
    
    return (
        <>
            <div>
                <h3>I'm Admin</h3>
                <button onClick={() => auth.logout()}>Logout</button>
            </div>
        </>
    )
}

export default Admin;