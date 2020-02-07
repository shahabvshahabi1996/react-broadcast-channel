import * as React from 'react';
import auth from '../../Auth';

interface IProps {
    history : any
}

const Home : React.FC<IProps> = props => {


    return (
        <>
            <div>
                <h3>I'm Home</h3>
                {!auth.isLogged() && <button onClick={() => auth.login()}>Login</button>}
            </div>
        </>
    )
}

export default Home;