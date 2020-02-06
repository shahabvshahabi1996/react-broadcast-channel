import * as React from 'react';
import { Auth } from '../../app.routes';

interface IProps {
    history : any
}

const Admin : React.FC<IProps> = props => {
    const auth = new Auth();
    return (
        <>
            <div>
                <h3>I'm Admin</h3>
                <button onClick={() => auth.logout(() => props.history.push('/'))}>Logout</button>
            </div>
        </>
    )
}

export default Admin;