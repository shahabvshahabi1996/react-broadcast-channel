import * as React from 'react';
import { Auth } from '../../app.routes';

interface IProps {
    history : any
}

const Home : React.FC<IProps> = props => {

    const auth = new Auth();

    return (
        <>
            <div>
                <h3>I'm Home</h3>
                {!auth.isLogged() && <button onClick={() => auth.login(() => props.history.push('/admin'))}>Login</button>}
            </div>
        </>
    )
}

export default Home;